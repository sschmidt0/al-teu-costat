import {
  View,
  TextInput,
  StyleSheet,
  KeyboardTypeOptions,
  Text,
} from "react-native";
import { CustomColors } from "../../constants/Colors";

export interface InputProps {
  editable?: boolean;
  isInvalid?: false;
  keyboardType?: KeyboardTypeOptions;
  label: string;
  multiline?: boolean;
  placeholder?: string;
  secure?: boolean;
  value: string;
  onUpdateValue: (value: string) => void;
}

export const Input: React.FC<InputProps> = ({
  editable = true,
  isInvalid,
  keyboardType,
  label,
  multiline,
  placeholder,
  secure,
  value,
  onUpdateValue,
}) => {
  return (
    <View style={styles.inputContainer}>
      <View>
        <Text style={styles.label}>{label}</Text>
      </View>
      <TextInput
        style={[
          styles.input,
          isInvalid && styles.inputInvalid,
          multiline && styles.inputMultiline,
        ]}
        editable={editable || isInvalid}
        keyboardType={keyboardType}
        secureTextEntry={secure}
        onChangeText={onUpdateValue}
        value={value}
        autoCapitalize="none"
        placeholder={placeholder}
        multiline={multiline}
        numberOfLines={8}
        maxLength={2000}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    marginVertical: 8,
  },
  label: {
    marginBottom: 8,
    marginLeft: 10,
    color: CustomColors.darkgrey,
    fontSize: 18,
  },
  labelInvalid: {
    color: CustomColors.error,
  },
  input: {
    paddingVertical: 8,
    paddingHorizontal: 12,
    backgroundColor: CustomColors.white,
    borderRadius: 10,
    fontSize: 16,
  },
  inputInvalid: {
    backgroundColor: CustomColors.error,
  },
  inputMultiline: { height: 160 },
});
