<template>
  <q-layout view="lHh Lpr lFf">
    <q-header
    class="bg-white
    text-grey-10"
    bordered
    >
      <q-toolbar class="constrain">
        <q-btn
        to="/camera"
        class="large-screen-only q-nr-sm"
        icon="eva-camera-outline"
        size="18px"
        flat
        round
        dense
        />
        <q-separator
        class="large-screen-only"
        vertical
        spaced
        />


        <q-toolbar-title>
          Quasagram
        </q-toolbar-title>

        <q-btn
        to="/"
        class="large-screen-only"
        icon="eva-home-outline"
        size="18px"
        flat
        round
        dense
        />

      </q-toolbar>
    </q-header>

    <q-footer
    class="bg-white small-screen-only"
    bordered
    >

    <q-tabs
    class="text-grey-10"
    active-color="primary"
    indicator-color="transparent"
    >
    <q-route-tab
    to="/"
    icon="eva-home-outline"
    />
    <q-route-tab
    to="/camera"
    icon="eva-camera-outline"
    />
    </q-tabs>
    </q-footer>

    <q-page-container class="bg-grey-1">
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>

export default {
  name: 'MainLayout',

  data () {
    return {

    }
  }
}
</script>

<style lang="scss">

</style>
