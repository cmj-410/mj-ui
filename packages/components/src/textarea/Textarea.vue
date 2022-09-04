<template>
  <div>
    <transition name="fade">
      <div v-show="focus && mask" class="mj-textarea-mask"></div>
    </transition>
    <span v-if="labelTop" class="mj-input-label">{{ labelTop }}</span>
    <textarea
      ref="textarea"
      :value="modelValue"
      :style="{ resize, 'z-index': mask ? '100' : null }"
      :disabled="disabled"
      class="mj-textarea"
      :placeholder="placeholder"
      :rows="rows"
      @input="onInput"
      @focus="focus = true"
      @blur="focus = false"
    ></textarea>
  </div>
</template>

<script lang="ts">
import './styles/index.less'
import { defineComponent, onMounted, nextTick, ref, computed } from 'vue'

/*
  todo:
  [] consider this https://css-tricks.com/the-cleanest-trick-for-autogrowing-textareas/
*/

export default defineComponent({
  name: 'mj-textarea',
  props: {
    placeholder: String,
    disabled: Boolean,
    resizable: Boolean,
    resizeOnWrite: Boolean,
    labelTop: String,
    rows: { type: Number, default: 4 },
    modelValue: String,
    mask: Boolean,
  },
  emits: ['update:modelValue'],
  setup(props, { emit }) {
    const textarea = ref(null)
    const focus = ref(false)

    const resize = computed(() =>
      props.resizable === true ? 'vertical' : 'none'
    )

    function onInput(e: InputEvent) {
      const target = e.target as HTMLTextAreaElement
      emit('update:modelValue', target.value)

      if (props.resizeOnWrite) {
        target.style.height = 'auto'
        target.style.height = target.scrollHeight + 'px'
      }
    }

    onMounted(async () => {
      if (props.resizeOnWrite) {
        await nextTick()
        ;(textarea.value! as HTMLTextAreaElement).style.height =
          (textarea.value! as HTMLTextAreaElement).scrollHeight + 'px'
      }
    })

    return { textarea, onInput, resize, focus }
  },
})
</script>
