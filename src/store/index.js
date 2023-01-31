import { createStore } from "vuex";
import axios from "axios";
import router from "../router/index";

const API_KEY = "d3ff4b8159814e2783defa2f32d9529a"

export default createStore({
  state: {
    gamesList: [],
    gamesPage: 1,
    currentGame: {},

    showSignupModal: false,
    showLoginModal: false,

    registeredUsers: [{name: 'a', username: 'a', email: 'a@a.com', password: 'aaaaa'}],
    loggedIn: false,
    currentUser: ""
  },

  getters: {
    getNextPageGames(state) {
      return state.gamesPage;
    },
  },

  mutations: {
    fetchGamesMut(state, gamesData) {
      let control;
      let names = state.gamesList.map(game => game.name)
      for (let i = 0; i < gamesData.length; i++) {
        control = names.indexOf(gamesData[i].name)
      }
      if (state.gamesList[0] == undefined || control == -1) {
        state.gamesList = state.gamesList.concat(gamesData)
      }
    },
    viewMoreGames(state) {
      state.gamesPage++
    },
    fetchCurrentGameMut(state, currentGameData) {
      state.currentGame = currentGameData;
    },
    swapSignupModal(state) {
      state.showSignupModal = !state.showSignupModal;
    },
    swapLoginModal(state) {
      state.showLoginModal = !state.showLoginModal;
    },
    addUser(state, userDataObject) {
      if (state.registeredUsers.length!=0) {
        const emailOnly = state.registeredUsers.map((user) => user.email.toLowerCase());
        const usernameOnly = state.registeredUsers.map((user) => user.username.toLowerCase());
        if ((!emailOnly.includes(userDataObject.email.toLowerCase())) & (!usernameOnly.includes(userDataObject.username.toLowerCase()))) {
          state.registeredUsers.push(userDataObject);
          state.showSignupModal = false;
          alert("User Registered succesfully");
        } else {
          alert("User already registered");
        }
      } else {
        state.registeredUsers.push(userDataObject);
        state.showSignupModal = false;
        alert("User Registered succesfully");
      }
      console.table(state.registeredUsers);
    },
    logIn(state, userDataObject) {
      let isSignedUp = false;

      if (state.registeredUsers.length) {
        state.registeredUsers.some((user) => {
          if (user.username === userDataObject.username && user.password === userDataObject.password) {
            return (isSignedUp = true);
          } else {
            isSignedUp = false;
          }
        });

        if (isSignedUp) {
          state.currentUser = userDataObject.username;
          state.loggedIn = true;
          state.showLoginModal = false;
          alert("User logged in");
        } else {
          state.loggedIn = false;
          alert("Invalid username or password");
        }
      } else {
        state.loggedIn = false;
        alert("No user with this username registered yet");
      }
    },
    logOut(state) {
      state.loggedIn = false;
      state.currentUser = "";

      router.push({ name: "home" });
      alert("User logged out");
    },
  },
  actions: {
    async fetchGamesAct({ commit }, gamesPage) {
      const gamesData = await axios.get(`https://api.rawg.io/api/games?key=${API_KEY}&page=${gamesPage}`).then(response => response.data.results)
      commit('fetchGamesMut', gamesData)
    },
    async fetchCurrentGameAct({ commit }, gameId) {
      const currentGameData = await axios.get(`https://api.rawg.io/api/games/${gameId}?key=${API_KEY}`).then(response => response.data)
      commit('fetchCurrentGameMut', currentGameData)
    }
  },
});
