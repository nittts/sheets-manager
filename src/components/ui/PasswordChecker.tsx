import { useLanguage } from "@/providers/provider/LanguageProvider";
import { ValidationUtils } from "@/utils/validations";
import { presetPrimaryColors } from "@ant-design/colors";
import {
  CheckCircleOutlined,
  CloseCircleOutlined,
  MinusCircleOutlined,
} from "@ant-design/icons";

import { List, Typography } from "antd";
import { useEffect, useState } from "preact/hooks";

type ValidationProps = {
  password: string;
  confirm_password: string;
};

type IconMapKeys = "valid" | "error" | "notTouched";

const { Text } = Typography;
const {
  Item: { Meta },
  Item,
} = List;

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

const validatePassword = (passwords: ValidationProps) => {
  const { password, confirm_password } = passwords;
  const { checkLength, hasLowerCase, hasNumber, hasUppercase, strMatch } =
    ValidationUtils;

  return {
    uppercase: hasUppercase(password) ? "valid" : "error",
    lowercase: hasLowerCase(password) ? "valid" : "error",
    number: hasNumber(password) ? "valid" : "error",
    length: checkLength(password, 8) ? "valid" : "error",
    match: strMatch(password, confirm_password) ? "valid" : "error",
  } as const;
};

function PasswordChecker(props: ValidationProps) {
  const { password = "", confirm_password = "" } = props;

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
    const validation = validatePassword({ password, confirm_password });

    setErrors(validation);
  }, [password, confirm_password]);

  return (
    <>
      <Text>{passwordCheck.heading}:</Text>
      <List>
        <Item>
          <Meta
            avatar={iconMap[errors.uppercase]}
            title={passwordCheck.uppercase}
            style={{ color: colors[errors.uppercase] }}
          />
        </Item>
        <Item>
          <Meta
            avatar={iconMap[errors.lowercase]}
            title={passwordCheck.lowercase}
            style={{ color: colors[errors.lowercase] }}
          />
        </Item>
        <Item>
          <Meta
            avatar={iconMap[errors.number]}
            title={passwordCheck.number}
            style={{ color: colors[errors.number] }}
          />
        </Item>
        <Item>
          <Meta
            avatar={iconMap[errors.length]}
            title={passwordCheck.length}
            style={{ color: colors[errors.length] }}
          />
        </Item>
        <Item>
          <Meta
            avatar={iconMap[errors.match]}
            title={passwordCheck.match}
            style={{ color: colors[errors.match] }}
          />
        </Item>
      </List>
    </>
  );
}

export default PasswordChecker;
