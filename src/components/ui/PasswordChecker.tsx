import { useLanguage } from "@/providers/provider/LanguageProvider";
import { ValidationUtils } from "@/utils/validations";
import { presetPrimaryColors } from "@ant-design/colors";
import {
  CheckCircleOutlined,
  CloseCircleOutlined,
  MinusCircleOutlined,
} from "@ant-design/icons";
import { Card, List, Typography } from "antd";
import { useEffect, useState } from "preact/hooks";

const { Text } = Typography;
const {
  Item: { Meta },
  Item,
} = List;

type ValidationProps = {
  password: string;
  confirmPassword: string;
};

type PasswordCheckerProps = ValidationProps & {
  isValid: (valid: boolean) => void;
};

type IconMapKeys = "valid" | "error" | "notTouched";

const iconMap = {
  valid: <CheckCircleOutlined />,
  error: <CloseCircleOutlined />,
  notTouched: <MinusCircleOutlined />,
};

const colors = {
  valid: presetPrimaryColors.green,
  error: presetPrimaryColors.red,
  notTouched: presetPrimaryColors.grey,
};

function PasswordChecker(props: PasswordCheckerProps) {
  const { password = "", confirmPassword = "", isValid } = props;

  const language = useLanguage();
  const { passwordCheck } = language;

  const [errors, setErrors] = useState<Record<string, IconMapKeys>>({
    uppercase: "notTouched",
    lowercase: "notTouched",
    number: "notTouched",
    length: "notTouched",
    match: "notTouched",
  });

  useEffect(() => {
    const validate = validatePassword({ password, confirmPassword });
    const valid = Object.values(validate).every((value) => value === "valid");

    if (isValid) {
      isValid(valid);
    }

    setErrors(validate);
  }, [confirmPassword, password]);

  return (
    <Card>
      <Text>{passwordCheck.heading}:</Text>
      <List>
        {Object.entries(errors).map(([key, value]: [string, IconMapKeys]) => (
          <Item>
            <Meta
              avatar={iconMap[value]}
              title={passwordCheck[key]}
              style={{ color: colors[value] }}
            />
          </Item>
        ))}
      </List>
    </Card>
  );
}

function validatePassword(passwords: ValidationProps) {
  const { password, confirmPassword } = passwords;
  const { checkLength, hasLowerCase, hasNumber, hasUppercase, strMatch } =
    ValidationUtils;

  return {
    uppercase: hasUppercase(password) ? "valid" : "error",
    lowercase: hasLowerCase(password) ? "valid" : "error",
    number: hasNumber(password) ? "valid" : "error",
    length: checkLength(password, 8) ? "valid" : "error",
    match: strMatch(password, confirmPassword) ? "valid" : "error",
  } as const;
}

export default PasswordChecker;
