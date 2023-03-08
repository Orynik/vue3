<script setup>
import { reactive, inject, onMounted } from "vue";
import { useVuelidate } from "@vuelidate/core";
import { required, email, minLength } from "@vuelidate/validators";
import { useRoute, useRouter } from "vue-router";

const router = useRouter();
const route = useRoute();
const toaster = inject("toaster");

const state = reactive({
  email: "",
  password: "",
});

const rules = {
  email: { email, required }, // Matches state.firstName
  password: { required, minLength: minLength(6) }, // Matches state.lastName
};

onMounted(() => {
  //TODO: Переделать на params
  if (route.query.msg) {
    toaster.show(route.query.msg);
  }
});

const v$ = useVuelidate(rules, state);

function formSubmit() {
  if (v$.value.$invalid) {
    v$.value.$touch();
    return;
  }

  const formData = {
    email: state.email,
    password: state.email,
  };

  console.log(formData);

  router.push("/");
}
</script>

<script>
export default {
  name: "login",
};
</script>

<template>
  <div>
    <form class="card auth-card" @submit.prevent="formSubmit">
      <div class="card-content">
        <span class="card-title">Домашняя бухгалтерия</span>
        <div class="input-field">
          <input
            id="email"
            type="text"
            class="validate"
            v-model.trim="state.email"
            :class="{
              invalid:
                v$.email.$dirty &&
                (v$.email.required.$invalid || v$.email.email.$invalid),
            }"
          />
          <label for="email">Email</label>
          <small
            v-if="v$.email.$invalid && v$.email.$dirty"
            class="helper-text invalid"
            >{{ v$.email.$silentErrors[0].$message }}</small
          >
        </div>
        <div class="input-field">
          <input
            id="password"
            type="password"
            class="validate"
            v-model.trim="state.password"
            :class="{
              invalid:
                v$.password.$dirty &&
                (v$.password.required.$invalid ||
                  v$.password.minLength.$invalid),
            }"
          />
          <label for="password">Пароль</label>
          <small
            v-if="v$.password.$invalid && v$.password.$dirty"
            class="helper-text invalid"
          >
            {{ v$.password.$silentErrors[0].$message }}
          </small>
        </div>
      </div>
      <div class="card-action">
        <div>
          <button
            class="btn waves-effect waves-light auth-submit"
            type="submit"
          >
            Войти
            <i class="material-icons right">send</i>
          </button>
        </div>

        <p class="center">
          Нет аккаунта?
          <router-link :to="{ name: 'register' }">
            Зарегистрироваться
          </router-link>
        </p>
      </div>
    </form>
  </div>
</template>

<style lang="scss"></style>
