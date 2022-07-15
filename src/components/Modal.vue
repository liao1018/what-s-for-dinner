<template>
  <div class="modal">
    <div
      class="modal__mask"
      @click.self="setting.hasMaskClose ? $emit('close') : null"
    >
      <div class="modal__content">
        <div
          class="modal__close"
          @click="$emit('close')"
          v-if="setting.hasCloseButton"
        >
          <font-awesome-icon :icon="['fas', 'times']" />
        </div>
        <div class="modal__header">
          <div v-if="setting.header">
            {{ setting.header }}
          </div>
        </div>
        <div class="modal__body">
          <p>{{ setting.body }}</p>
        </div>
        <div class="modal__footer">
          <div
            v-for="button in setting.footer"
            :key="button.content"
            class="label"
            :class="{
              'label--primary': button.type === 'primary',
              'label--secondary': button.type === 'secondary',
            }"
            @click="$emit(button.onClickEmit)"
          >
            {{ button.content }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    setting: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  emits: ['close'],
};
</script>
