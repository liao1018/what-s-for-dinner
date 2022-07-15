<template>
  <div
    :class="{
      'window--with-hamburgermenu': hamburger.isExist,
      'window--with-hamburgermenu--close': !hamburger.isOpen
    }"
    class="window window--with-sidemenu"
  >
    <!--side menu-->
    <div class="column--start bc--secondary">
      <div
        v-if="hamburger.isExist"
        class="fs6 pv1 pl4"
      >
        <font-awesome-icon
          :icon="['fas','times']"
          @click="hamburger.close()"
        />
      </div>
      <div
        v-for="(restaurant,index) in restaurants"
        :key="restaurant"
        class="pv3 ph2 row--space-between"
      >
        <div class="align--left">
          <span class="ellipsis ellipsis--one-line">
            {{ restaurant.name }}
          </span>
        </div>
        <div class="column--central">
          <font-awesome-icon
            v-if="restaurant.canBeAdded"
            :icon="['fas','plus']"
            @click="addCandidate(index)"
          />
        </div>
      </div>
    </div>
    <!--/side menu-->

    <!--main content-->
    <div>
      <font-awesome-icon
        v-if="hamburger.isExist"
        :icon="['fas','bars']"
        class="fs6 mv2 mh4"
        @click="hamburger.show()"
      />
      <router-view
        :candidates="candidates"
        @removeCandidate="removeCandidate"
        @addVotes="addVotes"
        @minusVotes="minusVotes"
        @drawLots="drawLots"
      />
    </div>
    <!--main content-->
  </div>
  <Modal
    v-if="modal.setting.isShow"
    :setting="modal.setting"
    @close="modal.close"
    @confirm="modal.close"
  />
</template>

<script>
import { ref } from 'vue';
import composable from '@/composable/index';
import restaurantsList from '@/assets/data/restaurants.json';

export default {
  setup() {
    const { hamburger, modal } = composable;
    hamburger.initialize();
    const restaurants = ref(initializeRestaurants(restaurantsList));
    const candidates = ref([]);
    const result = ref(null);

    function initializeRestaurants(aRestaurantsList) {
      return aRestaurantsList.map((restaurant) => ({
        ...restaurant, canBeAdded: true,
      }));
    }

    function addCandidate(index) {
      const { name, image } = restaurants.value[index];
      const newCandidates = [...candidates.value, { name, image, votes: 0 }];
      candidates.value = newCandidates;

      // restaurant 加過不能再加
      restaurants.value[index].canBeAdded = false;
    }

    function removeCandidate(index) {
      const removedCandidate = candidates.value[index];
      const newCandidates = [
        ...candidates.value.slice(0, index),
        ...candidates.value.slice(index + 1),
      ];
      candidates.value = newCandidates;

      // restaurant 可以加入
      const indexInRestaurant = restaurants.value.findIndex(
        (restaurant) => restaurant.name === removedCandidate.name,
      );
      restaurants.value[indexInRestaurant].canBeAdded = true;
    }

    function addVotes(candidateIndex) {
      candidates.value[candidateIndex].votes += 1;
    }

    function minusVotes(candidateIndex) {
      candidates.value[candidateIndex].votes -= 1;
    }

    function drawLots() {
      const totalNumberOfLots = candidates.value.reduce(
        (acc, cur) => acc + cur.votes, 0,
      );

      const randomIndex = Math.floor(Math.random() * totalNumberOfLots) + 1;

      let count = 0;
      result.value = candidates.value.find((candidate) => {
        const isReturn = (randomIndex > count)
        && (randomIndex <= count + candidate.votes);

        count += candidate.votes;

        return isReturn;
      });

      modal.confirm(`您的抽獎結果是 ${result.value.name} `);
    }

    return {
      hamburger,
      modal,
      restaurants,
      candidates,
      addCandidate,
      removeCandidate,
      addVotes,
      minusVotes,
      drawLots,
    };
  },
};
</script>
