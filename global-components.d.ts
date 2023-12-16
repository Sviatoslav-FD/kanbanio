import AppButton from "@/components/shared/AppButton.vue";
import AppCheck from "@/components/shared/AppCheck.vue";
import AppCheckbox from "@/components/shared/AppCheckbox.vue";
import AppColorPicker from "@/components/shared/AppColorPicker.vue";
import AppInput from "@/components/shared/AppInput.vue";
import AppInputGroup from "@/components/shared/AppInputGroup.vue";
import AppModal from "@/components/shared/AppModal.vue";

declare module "@vue/runtime-core" {
  export interface GlobalComponents {
    AppButton: typeof AppButton;
    AppCheck: typeof AppCheck;
    AppCheckbox: typeof AppCheckbox;
    AppColorPicker: typeof AppColorPicker;
    AppInput: typeof AppInput;
    AppInputGroup: typeof AppInputGroup;
    AppModal: typeof AppModal;
  }
}
