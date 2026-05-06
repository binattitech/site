"use client";

import { CaretDown, CaretUp, User, X } from "@phosphor-icons/react";
import { useState } from "react";
import styles from "./Input.module.css";

export type InputFieldType = "default" | "textArea" | "select";

export interface InputProps {
  label?: string;
  fieldType?: InputFieldType;
  value?: string;
  onChange?: (value: string) => void;
  options?: string[];
  name?: string;
  id?: string;
  className?: string;
}

export default function Input({
  label = "Nome Completo",
  fieldType = "default",
  value: externalValue,
  onChange,
  options = [],
  name,
  id,
  className,
}: InputProps) {
  const [internalValue, setInternalValue] = useState("");
  const [isFocused, setIsFocused] = useState(false);

  const value = externalValue !== undefined ? externalValue : internalValue;
  const hasValue = value.length > 0;
  const state = hasValue ? "typing" : isFocused ? "focus" : "default";

  const handleChange = (newValue: string) => {
    if (externalValue === undefined) setInternalValue(newValue);
    onChange?.(newValue);
  };

  const iconColor = "var(--fg-default)";

  const renderIcon = () => {
    if (fieldType === "select") {
      return hasValue ? (
        <CaretUp size={20} color={iconColor} />
      ) : (
        <CaretDown size={20} color={iconColor} />
      );
    }
    if (hasValue) {
      return (
        <button
          type="button"
          className={styles.clearBtn}
          onClick={() => handleChange("")}
          aria-label="Limpar campo"
        >
          <X size={20} color={iconColor} />
        </button>
      );
    }
    return <User size={20} color={iconColor} />;
  };

  return (
    <div
      className={[styles.wrapper, className].filter(Boolean).join(" ")}
      data-field-type={fieldType}
      data-state={state}
    >
      {fieldType === "textArea" ? (
        <textarea
          className={styles.input}
          name={name}
          id={id}
          value={value}
          placeholder={label}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          onChange={(e) => handleChange(e.target.value)}
        />
      ) : fieldType === "select" ? (
        <select
          className={styles.input}
          name={name}
          id={id}
          value={value}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          onChange={(e) => handleChange(e.target.value)}
        >
          <option value="" disabled hidden>
            {label}
          </option>
          {options.map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </select>
      ) : (
        <input
          className={styles.input}
          type="text"
          name={name}
          id={id}
          value={value}
          placeholder={label}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          onChange={(e) => handleChange(e.target.value)}
        />
      )}
      <span className={styles.iconSlot}>{renderIcon()}</span>
    </div>
  );
}
