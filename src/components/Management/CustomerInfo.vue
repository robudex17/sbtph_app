<template>
  <base-dialog :show="!!error" @close="handleError">
    <p>{{ error }}</p>
  </base-dialog>

  <base-container class="m-3">
    <!-- Loading Dialog -->
    <div v-if="isLoading">
      <base-dialog :show="isLoading">
        <base-spinner>
          <p>Fetching Data From the Database. Please wait...</p>
        </base-spinner>
      </base-dialog>
    </div>

    <!-- Total Registered Customers -->
    <div class="card bg-light p-2 mb-3 shadow-sm">
      <div class="card-body text-center">
        <p class="card-text fs-5 fw-semibold text-secondary">
          Total Customer Registered:
          <span class="text-primary fw-bold">
            {{ allCustomerRegistered.customer_registered_count }}
          </span>
        </p>
      </div>
    </div>

    <!-- Customer Records Table -->
    <div class="card shadow-sm mt-4">
      <div class="card-header bg-primary text-white fw-semibold">
        Customer Records
      </div>

      <div class="card-body p-0">
       
        <table
          class="table table-striped table-hover mb-0 align-middle text-center"
        >
          <thead class="table-dark">
            <tr>
              <th scope="col">Customer Number</th>
              <th scope="col">Customer ID</th>
              <th scope="col">Customer Name</th>
              <th scope="col">Updated By</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
         
          <tbody>
                   <!-- No Results Message -->
            <tr v-if="resultSearchCustomerNumber.length == 0 || !resultSearchCustomerNumber">
              
              <td colspan="5" class="text-muted py-3">
                No customer records found. Try searching by phone number.
              </td>
            </tr>
            <tr v-else
              v-for="(customer, index) in resultSearchCustomerNumber"
              :key="index"
            >
              <td>{{ customer.customer_number }}</td>
              <td>{{ customer.customer_id }}</td>
              <td>{{ customer.customer_name }}</td>
              <td>{{ customer.updated_by }}</td>
             
              <td>
                <button class="btn btn-sm btn-danger"
                @click="deleteCustomerNumber(customer)" 
                >
                  <i class="bi bi-trash"></i> Delete
                  
                </button>
              </td>
            </tr>

     
          </tbody>
        </table>
      </div>

      <!-- Search Button -->
      <div class="text-end p-3">
        <button
          type="button"
          class="btn btn-primary"
          data-bs-toggle="modal"
          data-bs-target="#searchModal"
        >
          <i class="bi bi-search"></i> Search Customer
        </button>
      </div>
    </div>

    <!-- Search Modal -->
    <div
      class="modal fade"
      id="searchModal"
      tabindex="-1"
      aria-labelledby="searchModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="searchModalLabel">Search Customer</h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <input
              type="text"
              class="form-control"
              placeholder="Enter phone number"
              v-model="phoneNumber"
            />
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Cancel
            </button>
            <button
              type="button"
              class="btn btn-primary"
              @click="searchCustomerNumber"
              data-bs-dismiss="modal"
            >
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
  </base-container>
</template>

<script>
export default {
  props: ["agent"],
  emits: ["emittedData"],

  data() {
    return {
      isLoading: false,
      error: null,
      phoneNumber: "",
      appName: this.$store.getters.getAppName,
    };
  },

  computed: {
    allCustomerRegistered() {
      return this.$store.getters["agentcdr/getTotalRegisteredCustomer"] || {};
    },
    resultSearchCustomerNumber() {
      // Ensure it always returns an array
      return (
        this.$store.getters["agentcdr/getResultSearchCustomerNUmber"] || []
      );
    },
  },

  methods: {
    async fetchAllCustomerRegistered() {
      try {
        this.isLoading = true;
        await this.$store.dispatch("agentcdr/fetchTotalRegisteredCustomer");
      } catch (e) {
        this.error = e.message;
      } finally {
        this.isLoading = false;
      }
    },

    async searchCustomerNumber() {
      try {
        if (!this.phoneNumber) {
          alert("Please enter a phone number first.");
          return;
        }
        this.isLoading = true;
        await this.$store.dispatch("agentcdr/searchCustomerNumber", {
          querystring: `customer_number=${this.phoneNumber}`,
        });
      } catch (e) {
        this.error = e.message;
      } finally {
        this.isLoading = false;
      }
    },

    async deleteCustomerNumber(customer) {
       let confirmAnswer = confirm(`Are you sure you want delete ${customer.customer_number}?`) 
      if(confirmAnswer){
            try {
            
                this.isLoading = true;
        
                await this.$store.dispatch("agentcdr/deleteCustomerInfo", customer);
                alert(`Customer with customer number ${customer.customer_number} is deleted`)
               
            } catch (e) {
                this.error = e.message;
            } finally {
                this.isLoading = false;
            }
      } 


    },    

    handleError() {
      this.error = null;
    },
  },

  created() {
    this.$store.dispatch("checkIfCurrentLogin");
    this.fetchAllCustomerRegistered();
  },

  watch: {
    agent() {
      this.fetchAllCustomerRegistered();
    },
    getAutoLogoutStatus(currentstatus, oldstatus) {
      if (currentstatus && currentstatus !== oldstatus) {
        this.$router.replace("/" + this.appName + "/login");
      }
    },
  },
};
</script>
