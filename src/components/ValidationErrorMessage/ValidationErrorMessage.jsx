import { ErrorMessage } from "@hookform/error-message";
import React from "react";
import ValidationError from "../ValidationError/ValidationError";

const ValidationErrorMessage = ({ errors, name }) => {
  return (
    <ErrorMessage
      errors={errors}
      name={name}
      render={({ messages }) => {
        return messages
          ? Object.entries(messages).map(([type, message]) => (
              <ValidationError key={type} message={message}></ValidationError>
            ))
          : null;
      }}
    />
  );
};

export default ValidationErrorMessage;
