import AppButton from "@/components/shared/AppButton.vue";
import AppCheck from "@/components/shared/AppCheck.vue";
import AppCheckbox from "@/components/shared/AppCheckbox.vue";
import AppInput from "@/components/shared/AppInput.vue";
import AppModal from "@/components/shared/AppModal.vue";

declare module "@vue/runtime-core" {
  export interface GlobalComponents {
    AppButton: typeof AppButton;
    AppCheck: typeof AppCheck;
    AppCheckbox: typeof AppCheckbox;
    AppInput: typeof AppInput;
    AppModal: typeof AppModal;
  }
}
