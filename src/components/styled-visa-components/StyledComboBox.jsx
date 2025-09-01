import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import styled from "styled-components";
// import { theme } from "../../theme";
import { VisaChevronDownTiny } from "@visa/nova-icons-react";
import { StyledLabel, StyledInputContainer, StyledInput } from "./StyledInput";
import {
  InputContainer,
  Label,
  Input,
  Button,
  Combobox,
  DropdownContainer,
  Listbox,
  ListboxContainer,
  ListboxItem,
  Radio,
  UtilityFragment,
} from "@visa/nova-react";
import { useCombobox } from "downshift";

const items = [
  { value: "Option A" },
  { value: "Option B" },
  { value: "Option C" },
  { value: "Option D" },
  { value: "Option E" },
];

const itemToString = (item) => (item ? item.value : "");

const stateReducer = (state, { type, changes }) =>
  // this prevents on mouse hover, the item in the list is automatic selected
  type === useCombobox.stateChangeTypes.ItemMouseMove ||
  type === useCombobox.stateChangeTypes.MenuMouseLeave
    ? {
        ...changes, // default Downshift new state changes on item selection.
        highlightedIndex: state.highlightedIndex,
      }
    : changes;

export const StyledListboxContainer = styled(ListboxContainer)`
  position: absolute;
  top: calc(100% + 0.25rem);
  width: 100%;
  border-radius: 0.75rem;
  z-index: 100;
`;

const MotionListbox = motion(StyledListboxContainer);

export const StyledListboxItem = styled(ListboxItem)`
  padding: 0.5rem 0.75rem !important;
  border-radius: 0.5rem;
  font-size: 1rem;
  transition: all 0.2s ease-in-out;

  & > .v-radio {
    display: none;
  }
`;

// Single combo box component that accepts a unique ID
const SingleComboBox = ({ id, label, useStyledComponents = true }) => {
  const {
    getInputProps,
    getItemProps,
    getLabelProps,
    getMenuProps,
    getToggleButtonProps,
    highlightedIndex,
    inputValue,
    isOpen,
  } = useCombobox({
    items: items,
    itemToString,
    stateReducer,
    id, // Pass the unique ID to useCombobox
  });

  // Strip `hidden` so exit animations can play instead of display:none hiding instantly
  const rawMenuProps = getMenuProps({}, { suppressRefError: true });
  const { hidden: _hidden, ...menuProps } = rawMenuProps;
  const { id: listboxId } = menuProps;

  // Keep the menu mounted briefly after close to allow exit animation
  const [shouldRenderMenu, setShouldRenderMenu] = useState(false);
  useEffect(() => {
    let timeoutId;
    if (isOpen) {
      setShouldRenderMenu(true);
    } else if (shouldRenderMenu) {
      timeoutId = setTimeout(() => setShouldRenderMenu(false), 200);
    }
    return () => {
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [isOpen, shouldRenderMenu]);

  const menuVariants = {
    closed: { opacity: 0, scale: 0.95 },
    open: { opacity: 1, scale: 1 },
  };

  if (useStyledComponents) {
    return (
      <Combobox>
        <UtilityFragment vFlex vFlexCol vGap={8}>
          <DropdownContainer>
            <StyledLabel {...getLabelProps()}>{label}</StyledLabel>
            <UtilityFragment vFlexRow>
              <StyledInputContainer>
                <StyledInput
                  aria-haspopup='listbox'
                  name={`text-input-field-${id}`}
                  type='text'
                  {...getInputProps({
                    "aria-expanded": isOpen,
                    "aria-owns": listboxId,
                  })}
                />
                <Button
                  aria-label='expand'
                  buttonSize='small'
                  colorScheme='tertiary'
                  iconButton
                  {...getToggleButtonProps()}>
                  <VisaChevronDownTiny />
                </Button>
              </StyledInputContainer>
            </UtilityFragment>
          </DropdownContainer>
        </UtilityFragment>
        <AnimatePresence mode='wait'>
          {shouldRenderMenu && (
            <MotionListbox
              key={`listbox-${id}`}
              variants={menuVariants}
              initial='closed'
              animate={isOpen ? "open" : "closed"}
              exit='closed'
              transition={{ duration: 0.2, ease: "easeInOut" }}
              style={{
                display: "block",
                pointerEvents: isOpen ? "auto" : "none",
              }}
              {...menuProps}>
              <Listbox>
                {items.map((item, index) => (
                  <StyledListboxItem
                    className={
                      highlightedIndex === index
                        ? "v-listbox-item-highlighted"
                        : ""
                    }
                    key={`${id}-item-${index}`}
                    {...getItemProps({
                      "aria-selected": inputValue === item.value,
                      index,
                      item,
                    })}>
                    <UtilityFragment vFlexShrink0>
                      <Radio tag='span' />
                    </UtilityFragment>
                    {item.value}
                  </StyledListboxItem>
                ))}
              </Listbox>
            </MotionListbox>
          )}
        </AnimatePresence>
      </Combobox>
    );
  }

  return (
    <Combobox>
      <UtilityFragment vFlex vFlexCol vGap={8}>
        <DropdownContainer>
          <Label {...getLabelProps()}>{label}</Label>
          <UtilityFragment vFlexRow>
            <InputContainer>
              <Input
                aria-haspopup='listbox'
                name={`text-input-field-${id}`}
                type='text'
                {...getInputProps({
                  "aria-expanded": isOpen,
                  "aria-owns": listboxId,
                })}
              />
              <Button
                aria-label='expand'
                buttonSize='small'
                colorScheme='tertiary'
                iconButton
                {...getToggleButtonProps()}>
                <VisaChevronDownTiny />
              </Button>
            </InputContainer>
          </UtilityFragment>
        </DropdownContainer>
      </UtilityFragment>
      <AnimatePresence mode='wait'>
        {shouldRenderMenu && (
          <motion.div
            key={`listbox-${id}`}
            variants={menuVariants}
            initial='closed'
            animate={isOpen ? "open" : "closed"}
            exit='closed'
            transition={{ duration: 0.2, ease: "easeInOut" }}
            {...menuProps}
            style={{
              display: "block",
              pointerEvents: isOpen ? "auto" : "none",
              position: "absolute",
              top: "calc(100% + 0.25rem)",
              width: "100%",
              zIndex: 100,
            }}>
            <ListboxContainer>
              <Listbox id={listboxId}>
                {items.map((item, index) => (
                  <ListboxItem
                    className={
                      highlightedIndex === index
                        ? "v-listbox-item-highlighted"
                        : ""
                    }
                    key={`${id}-item-${index}`}
                    {...getItemProps({
                      "aria-selected": inputValue === item.value,
                      index,
                      item,
                    })}>
                    <UtilityFragment vFlexShrink0>
                      <Radio tag='span' />
                    </UtilityFragment>
                    {item.value}
                  </ListboxItem>
                ))}
              </Listbox>
            </ListboxContainer>
          </motion.div>
        )}
      </AnimatePresence>
    </Combobox>
  );
};

const StyledNoAutocompleteCombobox = () => {
  return (
    <div style={{ width: "100%" }}>
      <SingleComboBox
        id='combo-1'
        label='Styled Combo Box'
        useStyledComponents={true}
      />
      <br />
      <SingleComboBox
        id='combo-2'
        label='Default Combo Box'
        useStyledComponents={false}
      />
    </div>
  );
};

export default StyledNoAutocompleteCombobox;
