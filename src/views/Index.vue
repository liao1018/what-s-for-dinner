<template>
  <div class="page ph3">
    <div
      v-if="candidates.length === 0"
      class="mv3 align--center"
    >
      請點選右側列表加入餐廳進行投票。
    </div>
    <div class="row--auto-fill-5 mb3">
      <div
        v-for="(candidate,index) in candidates"
        :key="candidate"
        class="ba--default mh4 mv3"
      >
        <div class="row--end">
          <div
            @click="$emit('removeCandidate', index)"
            class="circle circle--size-2 ba--note fc--note row--central"
          >
            <font-awesome-icon
              :icon="['fas','times']"
            />
          </div>
        </div>
        <img
          :src="candidate.image"
          alt=""
        >
        <div class="bc--secondary pv3">
          {{ candidate.name }}
        </div>
        <div class="mv2 row--central">
          <div
            @click="$emit('minusVotes',index)"
            class="circle circle--size-2 circle--primary row--central"
          >
            <font-awesome-icon
              :icon="['fas','minus']"
            />
          </div>
          <div class="mh5 column--central fs4">
            {{ candidate.votes }}
          </div>
          <div
            @click="$emit('addVotes',index)"
            class="circle circle--size-2 circle--primary row--central"
          >
            <font-awesome-icon
              :icon="['fas','plus']"
            />
          </div>
        </div>
      </div>
    </div>
    <div class="row--end">
      <div
        v-if="candidates.length > 0 "
        class="label--primary pv2 ph4 border-radius-2"
      >
        開始投票
      </div>
    </div>
  </div>
</template>

<script>

export default {
  props: {
    candidates: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  emits: ['removeCandidate', 'addVotes', 'minusVotes'],
};
</script>

<style scoped>
/* * {
  border: solid 1px;
} */
</style>
