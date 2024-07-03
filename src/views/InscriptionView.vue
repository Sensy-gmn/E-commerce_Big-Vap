<script setup lang="ts">
import { ref } from 'vue'

const nom = ref('')
const prenom = ref('')
const password = ref('')
const civilite = ref('')

console.log(
  `nom: ${nom.value}, prenom: ${prenom.value}, password: ${password.value}, civilite: ${civilite.value}`
)
</script>

<template>
  <div class="flex justify-center items-center h-full w-full">
    <section class="gradient-form h-full w-full">
      <div class="container h-full p-4 md:p-10">
        <div class="flex h-full flex-wrap items-center justify-center text-white">
          <div class="w-full">
            <div class="block rounded-lg bg-white shadow-lg h-full w-full">
              <div class="g-0 lg:flex h-full w-full">
                <!-- Left column container-->
                <div class="px-4 md:px-0 h-full w-full">
                  <div class="md:mx-6 md:p-8 h-full flex flex-col justify-center items-center">
                    <!--Logo-->
                    <div class="text-center">
                      <img
                        class="mx-auto w-28"
                        src="../assets/site/vape-cigarette-electronique-icone-vecteur-fumee_654491-434.jpg"
                        alt="logo"
                      />
                      <h4 class="mb-12 mt-1 pb-1 text-xl font-semibold text-gray-900">
                        The BIG-VAP
                      </h4>
                    </div>

                    <form class="flex flex-col w-full md:w-1/2">
                      <p class="mb-4 text-gray-900">Créez un compte</p>
                      <!--Username input-->
                      <div class="flex relative mb-4 items-center" data-twe-input-wrapper-init>
                        <label for="civilite" class="text-gray-900">Civilité</label>
                        <input
                          type="radio"
                          name="civilite"
                          value="M"
                          class="ml-8"
                          v-model="civilite"
                        />
                        <label for="civilite" class="text-gray-900">M</label>
                        <input
                          type="radio"
                          name="civilite"
                          value="Mme"
                          class="ml-8"
                          v-model="civilite"
                        />
                        <label for="civilite" class="text-gray-900 ml-2">Mme</label>
                      </div>
                      <!-- nom et prenom flex-row -->
                      <div
                        class="flex flex-col md:flex-row relative mb-4 space-x-0 md:space-x-4"
                        data-twe-input-wrapper-init
                      >
                        <label for="nom" class="text-gray-900">Nom</label>
                        <input
                          type="text"
                          v-model="nom"
                          class="border-2 border-gray-600 w-full md:w-1/2 mb-4 md:mb-0 text-gray-900"
                        />
                        <label for="prenom" class="text-gray-900">Prénom</label>
                        <input
                          type="text"
                          v-model="prenom"
                          class="border-2 border-gray-600 w-full md:w-1/2 mb-4 md:mb-0 text-gray-900"
                        />
                      </div>
                      <!--Password input-->
                      <div class="relative mb-4" data-twe-input-wrapper-init>
                        <input
                          type="password"
                          v-model="password"
                          class="peer block min-h-[auto] w-full rounded border-2 border-gray-600 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[twe-input-state-active]:placeholder:opacity-10 motion-reduce:transition-none text-gray-900 dark:placeholder:text-neutral-300 dark:autofill:shadow-autofill dark:peer-focus:text-primary [&:not([data-twe-input-placeholder-active])]:placeholder:opacity-0"
                          id="exampleFormControlInput11"
                          :placeholder="password ? '' : 'Mot de passe'"
                        />
                        <label
                          v-if="!password"
                          for="exampleFormControlInput11"
                          class="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-gray-900 transition-all duration-200 ease-out peer-focus:-translate-y-[0.5rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[twe-input-state-active]:-translate-y-[0.9rem] peer-data-[twe-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-400 dark:peer-focus:text-primary"
                          >Mot de passe
                        </label>
                      </div>

                      <!--Submit button-->
                      <div class="mb-12 pb-1 pt-1 text-center">
                        <button
                          @click="
                            console.log(
                              `nom: ${nom}, prenom: ${prenom}, password: ${password}, civilite: ${civilite}`
                            )
                          "
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
                          S'inscrire
                        </button>
                      </div>
                    </form>
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
