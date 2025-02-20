import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { CustomColors } from "../../constants/Colors";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { transformStamp } from "../../utilities";
import { ModeOptions } from "../../utilities/models/general";

export interface DateTimeInputIosProps {
  label: string;
  mode: ModeOptions;
  value: string;
  onUpdateValue: (value: string) => void;
}

export const DateTimeInputIos: React.FC<DateTimeInputIosProps> = ({
  label,
  mode,
  value,
  onUpdateValue,
}) => {
  const [inputValue, setInputValue] = React.useState(value);
  const [isDatePickerVisible, setIsDatePickerVisible] = React.useState(false);

  const showDatePicker = () => {
    setIsDatePickerVisible(true);
  };

  const hideDatePicker = () => {
    setIsDatePickerVisible(false);
  };

  const handleUpdateValue = (selectedValue: Date) => {
    const transformedStamp = transformStamp(selectedValue, mode);

    setInputValue(transformedStamp);
    onUpdateValue(transformedStamp);
    hideDatePicker();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{label}</Text>
      <TouchableOpacity
        onPress={showDatePicker}
        style={styles.buttonContainer}
        activeOpacity={0.8}
      >
        <Text>{inputValue}</Text>
      </TouchableOpacity>
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode={mode}
        onConfirm={(value) => handleUpdateValue(value)}
        onCancel={hideDatePicker}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
    backgroundColor: CustomColors.primary300,
  },
  text: {
    marginLeft: 10,
    fontSize: 16,
    color: CustomColors.darkgrey,
  },
  buttonContainer: {
    marginTop: 10,
    padding: 10,
    borderRadius: 10,
    backgroundColor: CustomColors.white,
  },
});
