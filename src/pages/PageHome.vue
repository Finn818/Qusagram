<template>

  <div class=" row q-col-gutter-lg">
    <div class="col-12  col-sm-8">
      <q-card
      v-for="post in posts"
    :key="post.id"
    class="card-post q-mb-md"
    flat
    bordered>
      <q-item>
        <q-item-section avatar>
          <q-avatar>
            <img src="https://i.postimg.cc/nLsW6Gjw/6863b784-26e2-4263-9074-5400e3e46a12.jpg">
          </q-avatar>
        </q-item-section>

      <q-item-section>
        <q-item-label class="text-bold">Mr__Finn</q-item-label>
        <q-item-label caption>
          {{ post.location }}
        </q-item-label>
      </q-item-section>
      </q-item>

      <q-separator />

      <q-img
        :src="post.imageUrl"
        />

        <q-card-section>
          <div>{{ post.caption }}</div>
          <div class="text-caption text-grey"> {{ post.date | niceDate }}</div>
        </q-card-section>

      </q-card>
    </div>

    <div class="col-4 large-screen-only">
      <q-item class="fixed">
        <q-item-section avatar>
          <q-avatar size="48px">
            <img src="https://i.postimg.cc/nLsW6Gjw/6863b784-26e2-4263-9074-5400e3e46a12.jpg">
          </q-avatar>
        </q-item-section>

      <q-item-section>
        <q-item-label class="text-bold">Mr__Finn</q-item-label>
        <q-item-label caption>
          Joshua Solomons
        </q-item-label>
      </q-item-section>
      </q-item>
    </div>
  </div>
  <!-- <q-page class="constrain q-pa-md">
  </q-page> -->
</template>

<script>
  import { date } from 'quasar'

export default {
  name: 'PageHome',
  data() {
    return {
      posts: [
        {
          id: 1,
          caption: 'Golden Gate Bridge',
          date: 159177665504,
          location: 'San Francisco, United Sates',
          imageUrl: 'https://cdn.quasar.dev/img/parallax2.jpg'
        },
        {
          id: 2,
          caption: 'Golden Gate Bridge',
          date: 159177665504,
          location: 'San Francisco, United Sates',
          imageUrl: 'https://cdn.quasar.dev/img/parallax2.jpg'
        },
        {
          id: 3,
          caption: 'Golden Gate Bridge',
          date: 159177665504,
          location: 'San Francisco, United Sates',
          imageUrl: 'https://cdn.quasar.dev/img/parallax2.jpg'
        },
        {
          id: 4,
          caption: 'Golden Gate Bridge',
          date: 159177665504,
          location: 'San Francisco, United Sates',
          imageUrl: 'https://cdn.quasar.dev/img/parallax2.jpg'
        }
      ]
    }
  },
  filters: {
    niceDate(value) {
      return date.formatDate(value, 'MMMM D h:mmA')
    }
  }
}
</script>
 <style>

 </style>
