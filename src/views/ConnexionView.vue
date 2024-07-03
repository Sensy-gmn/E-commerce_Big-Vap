<script setup lang="ts">
import { ref } from 'vue'

const username = ref('')
const password = ref('')
</script>

<template>
  <div class="flex justify-center items-center h-full w-full">
    <section class="gradient-form h-full">
      <div class="container h-full p-10">
        <div class="flex h-full flex-wrap items-center justify-center text-white">
          <div class="w-full">
            <div class="block rounded-lg bg-white shadow-lg bg-blue-900">
              <div class="g-0 lg:flex lg:flex-wrap">
                <!-- Left column container-->
                <div class="px-4 md:px-0 lg:w-6/12">
                  <div class="md:mx-6 md:p-12">
                    <!--Logo-->
                    <div class="text-center">
                      <img
                        class="mx-auto w-44"
                        src="../assets/site/vape-cigarette-electronique-icone-vecteur-fumee_654491-434.jpg"
                        alt="logo"
                      />
                      <h4 class="mb-12 mt-1 pb-1 text-xl font-semibold text-gray-900">
                        The BIG-VAP
                      </h4>
                    </div>

                    <form>
                      <p class="mb-4 text-gray-900">Veuillez vous connecter à votre compte</p>
                      <!--Username input-->
                      <div class="relative mb-4" data-twe-input-wrapper-init>
                        <input
                          type="text"
                          v-model="username"
                          class="peer block min-h-[auto] w-full rounded border-2 border-gray-600 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[twe-input-state-active]:placeholder:opacity-10 motion-reduce:transition-none dark:text-white dark:placeholder:text-neutral-300 dark:autofill:shadow-autofill dark:peer-focus:text-primary [&:not([data-twe-input-placeholder-active])]:placeholder:opacity-0"
                          id="exampleFormControlInput1"
                          :placeholder="username ? '' : 'Nom d\'utilisateur'"
                        />
                        <label
                          v-if="!username"
                          for="exampleFormControlInput1"
                          class="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-white transition-all duration-200 ease-out peer-focus:-translate-y-[0.5rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[twe-input-state-active]:-translate-y-[0.9rem] peer-data-[twe-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-400 dark:peer-focus:text-primary"
                          >Nom d'utilisateur
                        </label>
                      </div>

                      <!--Password input-->
                      <div class="relative mb-4" data-twe-input-wrapper-init>
                        <input
                          type="password"
                          v-model="password"
                          class="peer block min-h-[auto] w-full rounded border-2 border-gray-600 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[twe-input-state-active]:placeholder:opacity-10 motion-reduce:transition-none dark:text-white dark:placeholder:text-neutral-300 dark:autofill:shadow-autofill dark:peer-focus:text-primary [&:not([data-twe-input-placeholder-active])]:placeholder:opacity-0"
                          id="exampleFormControlInput11"
                          :placeholder="password ? '' : 'Mot de passe'"
                        />
                        <label
                          v-if="!password"
                          for="exampleFormControlInput11"
                          class="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-white transition-all duration-200 ease-out peer-focus:-translate-y-[0.5rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[twe-input-state-active]:-translate-y-[0.9rem] peer-data-[twe-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-400 dark:peer-focus:text-primary"
                          >Mot de passe
                        </label>
                      </div>

                      <!--Submit button-->
                      <div class="mb-12 pb-1 pt-1 text-center">
                        <button
                          class="mb-3 inline-block w-full rounded px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-dark-3 transition duration-150 ease-in-out hover:shadow-dark-2 focus:shadow-dark-2 focus:outline-none focus:ring-0 active:shadow-dark-2 dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"
                          type="button"
                          data-twe-ripple-init
                          data-twe-ripple-color="light"
                          style="
                            background: linear-gradient(
                              to right,
                              #ee7724,
                              #d8363a,
                              #dd3675,
                              #b44593
                            );
                          "
                        >
                          Se connecter
                        </button>

                        <!--Forgot password link-->
                        <a href="#!">Mot de passe oublié ?</a>
                      </div>

                      <!--Register button-->
                      <div class="flex items-center justify-between pb-6">
                        <p class="mb-0 me-2 text-gray-900">Vous n'avez pas de compte ?</p>
                        <button
                          @click="$router.push('/inscription')"
                          type="button"
                          class="inline-block rounded border-2 border-danger px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-danger transition duration-150 ease-in-out hover:border-danger-600 hover:bg-danger-50/50 hover:text-danger-600 focus:border-danger-600 focus:bg-danger-50/50 focus:text-danger-600 focus:outline-none focus:ring-0 active:border-danger-700 active:text-danger-700 dark:hover:bg-rose-950 dark:focus:bg-rose-950"
                          data-twe-ripple-init
                          data-twe-ripple-color="light"
                          style="
                            background: linear-gradient(
                              to right,
                              #ee7724,
                              #d8363a,
                              #dd3675,
                              #b44593
                            );
                          "
                        >
                          S'inscrire
                        </button>
                      </div>
                    </form>
                  </div>
                </div>

                <!-- Right column container with background and description-->
                <div
                  class="flex items-center rounded-b-lg lg:w-6/12 lg:rounded-e-lg lg:rounded-bl-none"
                  style="background: linear-gradient(to right, #ee7724, #d8363a, #dd3675, #b44593)"
                >
                  <div class="px-4 py-6 text-white md:mx-6 md:p-12">
                    <h4 class="mb-6 text-xl font-semibold">
                      Nous sommes plus que juste une entreprise
                    </h4>
                    <p class="text-sm">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                      quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                      consequat.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
