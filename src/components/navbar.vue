<template>
  <div class="navbar bg-base-100 shadow">
    <div class="flex-1">
      <a class="btn btn-ghost normal-case text-xl text-primary">Cash Book App</a>
      <ul class="menu menu-horizontal p-2">
        <li class="text-primary">
          <router-link to="/">home</router-link>
        </li>
        <li class="text-primary">
          <router-link to="/about">about</router-link>
        </li>
      </ul>
    </div>
    <div class="flex-none">
      <button v-if="!user" class="btn btn-primary mx-3" @click="signIn">Sign In </button>
      <div v-else class="dropdown dropdown-end">
        <label tabindex="0" class="btn btn-ghost">
          <p class="text-sm text-primary">Welcome.. {{user}}</p>
        </label>
        <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
          <li>
            <a class="justify-between">
              Profile
            </a>
          </li>
          <li @click="signOut"><a>Logout</a></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
import auth from '@/service/auth'
import { ref, onBeforeMount } from 'vue'
import Nprogress from 'nprogress'

const user = ref('')

const signIn = async () => {
  Nprogress.start()
  await auth().login()
  user.value = localStorage.getItem('auth')
  Nprogress.done()
}

const signOut = async () => {
  Nprogress.start()
  await auth().logout()
  user.value = ''
  Nprogress.done()
}

onBeforeMount(async () => {
  user.value = localStorage.getItem('auth')
})
</script>
