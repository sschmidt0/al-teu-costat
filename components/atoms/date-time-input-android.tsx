import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { CustomColors } from "../../constants/Colors";
import DateTimePicker, {
  DateTimePickerEvent,
} from "@react-native-community/datetimepicker";
import { transformStamp } from "../../utilities";
import { ModeOptions } from "../../utilities/models/general";

export interface DateTimeInputAndroidProps {
  label: string;
  mode: ModeOptions;
  value: string;
  onUpdateValue: (value: string) => void;
}

export const DateTimeInputAndroid: React.FC<DateTimeInputAndroidProps> = ({
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

  const [date, setDate] = React.useState(new Date(1598051730000));

  const onChange = (
    _event: DateTimePickerEvent,
    selectedDate: Date | undefined
  ) => {
    if (!selectedDate) return;

    const currentDate = selectedDate;
    setDate(currentDate);

    const transformedStamp = transformStamp(selectedDate, mode);
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
      {isDatePickerVisible && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode={mode}
          is24Hour={true}
          onChange={onChange}
        />
      )}
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
