import Vue from 'vue'
import Vuex from 'vuex'
import { customers, drugs } from '@/data';
import { Drug, Customer } from '@/models'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    customers: [...customers],
    drugs: [...drugs],
    currentCustomer: 0,
  },
  getters: {
    getCustomers(state: any) {
      return state.customers;
    },
    getDrugs(state: any) {
      return state.drugs;
    },
    getCurrentCustomer(state: any) {
      return state.currentCustomer;
    }
  },
  mutations: {
    setCurrentCustomer(state: any) {
      state.currentCustomer += 1;
    },
    setCustomerDrugId(state: any, idDrug: number) {
      const selectCustomer = state.customers.find((item: Customer, index: number) => index === state.currentCustomer)
      selectCustomer.drugId = idDrug;
    },
    setCountDrugs(state: any, id: number) {
      state.drugs.find((item: Drug) => {
        if (item.id === id) {
          item.count++;
        }
      })
    },
    setReset(state: any) {
      state.drugs = [...state.drugs].map((item) => ({ ...item, count: 0 }));
      state.currentCustomer = 0;
    }
  },
  actions: {
    setCountDrugs(state: any, data: any) {
      state.commit("setCountDrugs", data);
    },
    setCurrentCustomer(state: any) {
      state.commit("setCurrentCustomer");
    },
    setCustomerDrugId(state: any, idDrug: number) {
      state.commit("setCustomerDrugId", idDrug);
    },
    setReset(state: any) {
      state.commit("setReset");
    }
  },
  modules: {
  }
})
