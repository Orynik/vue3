<script setup>
// TODO: создать отдельный компонент для валидации
import { reactive } from "vue";
import { useVuelidate } from "@vuelidate/core";
import { required, email, minLength } from "@vuelidate/validators";
import { useRouter } from "vue-router";
import { useAuthStore } from "@/store";

let authStore = useAuthStore();

const state = reactive({
  email: "",
  password: "",
  name: "",
  isAgreePP: "",
});

const rules = {
  email: { email, required },
  password: { required, minLength: minLength(6) },
  name: { required },
  isAgreePP: { checkbox: (value) => value },
};

const v$ = useVuelidate(rules, state);
const router = useRouter();

function formSubmit() {
  if (v$.value.$invalid) {
    v$.value.$touch();
    return;
  }

  const formData = {
    email: state.email,
    password: state.password,
    name: state.name,
    isAgreePP: !!state.isAgreePP,
  };

  authStore.registerUser(formData).then(() => {
    router.push("/");
  });
}
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
            v-if="v$.password.$invalid && v$.email.$dirty"
            class="helper-text invalid"
          >
            {{ v$.password.$silentErrors[0].$message }}
          </small>
        </div>
        <div class="input-field">
          <input
            id="name"
            type="text"
            class="validate"
            v-model.trim="state.name"
            :class="{
              invalid: v$.name.$dirty && v$.password.required.$invalid,
            }"
          />
          <label for="name">Имя</label>
          <small
            v-if="v$.name.$invalid && v$.name.$dirty"
            class="helper-text invalid"
          >
            {{ v$.name.$silentErrors[0].$message }}
          </small>
        </div>
        <p>
          <label>
            <input type="checkbox" v-model="state.isAgreePP" />
            <span>С правилами согласен</span>
          </label>
        </p>
      </div>
      <div class="card-action">
        <div>
          <button
            class="btn waves-effect waves-light auth-submit"
            type="submit"
          >
            Зарегистрироваться
            <i class="material-icons right">send</i>
          </button>
        </div>

        <p class="center">
          Уже есть аккаунт?
          <router-link :to="{ name: 'login' }">Войти!</router-link>
        </p>
      </div>
    </form>
  </div>
</template>
