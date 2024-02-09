"use client";

import * as React from "react";
import { Check, ChevronDown, ChevronUp, Plane, Trash, Warehouse } from "lucide-react";

import { cn } from "@/lib/utils";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandSeparator,
} from "@/components/ui/command";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { DialogClose } from "@radix-ui/react-dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

type Options = Record<"value" | "label" | "color" | "type", string>;

interface MyComponentProps {
  options: Options[];
  dropdownName: string;
  defaultOptionSelected: boolean;
}

const badgeStyle = (color: string) => ({
  borderColor: `${color}20`,
  backgroundColor: `${color}30`,
  color,
});

export const  ShadMultiselect: React.FC<MyComponentProps> = ({ options, dropdownName, defaultOptionSelected }) => {
  const inputRef = React.useRef<HTMLInputElement>(null);
  const [frameworks, setFrameworks] = React.useState<Options[]>(options);
  const [openCombobox, setOpenCombobox] = React.useState(false);
  const [openDialog, setOpenDialog] = React.useState(false);
  const [inputValue, setInputValue] = React.useState<string>("");
  const [selectedValues, setSelectedValues] = React.useState<Options[] | [] >(defaultOptionSelected ? [options[0]]: []);

  const createFramework = (name: string) => {
    const newFramework = {
      value: name.toLowerCase(),
      label: name,
      color: "#ffffff",
      type: "normal"
    };
    setFrameworks((prev) => [...prev, newFramework]);
    setSelectedValues((prev) => [...prev, newFramework]);
  };

  const toggleFramework = (framework: Options) => {
    setSelectedValues((currentFrameworks: Options[]) =>
      !currentFrameworks.includes(framework)
        ? [...currentFrameworks, framework]
        : currentFrameworks.filter((l) => l.value !== framework.value)
    );
    inputRef?.current?.focus();
  };

  const updateFramework = (framework: Options, newFramework: Options) => {
    setFrameworks((prev) =>
      prev.map((f) => (f.value === framework.value ? newFramework : f))
    );
    setSelectedValues((prev) =>
      prev.map((f) => (f.value === framework.value ? newFramework : f))
    );
  };

  const deleteFramework = (framework: Options) => {
    setFrameworks((prev) => prev.filter((f) => f.value !== framework.value));
    setSelectedValues((prev) =>
      prev.filter((f) => f.value !== framework.value)
    );
  };

  const onComboboxOpenChange = (value: boolean) => {
    inputRef.current?.blur(); // HACK: otherwise, would scroll automatically to the bottom of page
    setOpenCombobox(value);
  };

  return (
    <div className="flex flex-col w-full mb-2">
      <span className='font-semibold text-xs mb-1'>{dropdownName}</span>
      <Popover open={openCombobox} onOpenChange={onComboboxOpenChange}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            role="combobox"
            aria-expanded={openCombobox}
            className="w-full justify-between text-foreground"
          >
            <span className="truncate">
              {selectedValues?.length === 0 && "Select a branch"}
              {selectedValues?.length === 1 && 
                <Badge className="me-1">{selectedValues[0].label}</Badge>
              }
              {selectedValues && selectedValues.length >= 2 &&
              <span>
                <Badge className="me-1">{selectedValues[0].label}</Badge>
                +{selectedValues.length-1}</span>
              }
            </span>
            {!openCombobox && 
              <ChevronDown className="ml-2 h-4 w-4 shrink-0 opacity-50" /> 
            }
            {openCombobox && 
              <ChevronUp className="ml-2 h-4 w-4 shrink-0 opacity-50" /> 
            }
          </Button>
        </PopoverTrigger>
        <PopoverContent className="p-0">
          <Command loop>
            <CommandInput
              ref={inputRef}
              placeholder="Search for a branch..."
              value={inputValue}
              onValueChange={setInputValue}
            />
            <CommandGroup className="max-h-[145px] overflow-auto">
              {frameworks.map((framework) => {
                const isActive = (selectedValues as Options[]).includes(framework);
                return (
                  <CommandItem
                    key={framework.value}
                    value={framework.value}
                    onSelect={() => toggleFramework(framework)}
                  >
                    <div
                      className={cn(
                        "mr-2 flex h-4 w-4 items-center justify-center rounded-sm border border-df-purple",
                        isActive
                          ? "bg-primary text-primary-foreground"
                          : "opacity-50 [&_svg]:invisible"
                      )}
                    >
                      <Check
                        className={cn(
                          " h-5 w-5",
                          isActive ? "opacity-100" : "opacity-0"
                        )}
                        strokeWidth={3} 
                      />
                    </div>
                    <div className="flex-1">{framework.label}</div>
                    {
                      framework.type === "airport" &&
                      <Plane className={"ms-1 h-5 w-5"}/>
                    }
                    {
                      framework.type === "normal" &&
                      <Warehouse className={"ms-1 h-5 w-5"}/>
                    }
                  </CommandItem>
                );
              })}
              <CommandItemCreate
                onSelect={() => createFramework(inputValue)}
                {...{ inputValue, frameworks }}
              />
            </CommandGroup>
            <CommandSeparator alwaysRender />
            {selectedValues && selectedValues.length > 0 && (
              <>
                <CommandSeparator />
                <CommandGroup>
                  <CommandItem
                    onSelect={() => setSelectedValues([])}
                    className="justify-center text-center"
                  >
                    <Trash className="mr-2 h-4 w-4" />
                    Clear Branches
                  </CommandItem>
                </CommandGroup>
              </>
            )}
            {/* <CommandGroup>
              <CommandItem
                value={`:${inputValue}:`} // HACK: that way, the edit button will always be shown
                className="text-xs text-muted-foreground"
                onSelect={() => setOpenDialog(true)}
              >
                <div className={cn("mr-2 h-4 w-4")} />
                <Edit2 className="mr-2 h-2.5 w-2.5" />
                Edit Labels
              </CommandItem>
            </CommandGroup> */}
          </Command>
        </PopoverContent>
      </Popover>
      <Dialog
        open={openDialog}
        onOpenChange={(open: boolean | ((prevState: boolean) => boolean)) => {
          if (!open) {
            setOpenCombobox(true);
          }
          setOpenDialog(open);
        }}
      >
        <DialogContent className="max-h-[90vh] flex flex-col">
          <DialogHeader>
            <DialogTitle>Edit Labels</DialogTitle>
            <DialogDescription>
              Change the label names or delete the labels. Create a label
              through the combobox though.
            </DialogDescription>
          </DialogHeader>
          <div className="overflow-scroll -mx-6 px-6 flex-1 py-2">
            {frameworks.map((framework) => {
              return (
                <DialogListItem
                  key={framework.value}
                  onDelete={() => deleteFramework(framework)}
                  onSubmit={(e) => {
                    e.preventDefault();
                    const target = e.target as typeof e.target &
                      Record<"name" | "color" | "type", { value: string }>;
                    const newFramework = {
                      value: target.name.value.toLowerCase(),
                      label: target.name.value,
                      color: target.color.value,
                      type: target.type.value,
                    };
                    updateFramework(framework, newFramework);
                  }}
                  {...framework}
                />
              );
            })}
          </div>
          <DialogFooter className="bg-opacity-40">
            <DialogClose asChild>
              <Button variant="outline">Close</Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
      {/* <div className="relative mt-3 h-24 -mb-24 overflow-y-auto">
        {selectedValues.map(({ label, value, color }) => (
          <Badge
            key={value}
            variant="outline"
            style={badgeStyle(color)}
            className="mr-2 mb-2"
          >
            {label}
          </Badge>
        ))}
      </div> */}
    </div>
  );
}

const CommandItemCreate = ({
  inputValue,
  frameworks,
  onSelect,
}: {
  inputValue: string;
  frameworks: Options[];
  onSelect: () => void;
}) => {
  const hasNoFramework = !frameworks
    .map(({ value }) => value)
    .includes(`${inputValue.toLowerCase()}`);

  const render = inputValue !== "" && hasNoFramework;

  if (!render) return null;

  return (
    <CommandItem
      key={`${inputValue}`}
      value={`${inputValue}`}
      className="text-xs text-muted-foreground"
      onSelect={onSelect}
    >
      <div className={cn("mr-2 h-4 w-4")} />
      Create new label &quot;{inputValue}&quot;
    </CommandItem>
  );
};

const DialogListItem = ({
  value,
  label,
  color,
  onSubmit,
  onDelete,
}: Options & {
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  onDelete: () => void;
}) => {
  const inputRef = React.useRef<HTMLInputElement>(null);
  const [accordionValue, setAccordionValue] = React.useState<string>("");
  const [inputValue, setInputValue] = React.useState<string>(label);
  const [colorValue, setColorValue] = React.useState<string>(color);
  const disabled = label === inputValue && color === colorValue;

  React.useEffect(() => {
    if (accordionValue !== "") {
      inputRef.current?.focus();
    }
  }, [accordionValue]);

  return (
    <Accordion
      key={value}
      type="single"
      collapsible
      value={accordionValue}
      onValueChange={setAccordionValue}
    >
      <AccordionItem value={value}>
        <div className="flex justify-between items-center">
          <div>
            <Badge variant="outline" style={badgeStyle(color)}>
              {label}
            </Badge>
          </div>
          <div className="flex items-center gap-4">
            <AccordionTrigger>Edit</AccordionTrigger>
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button variant="destructive" size="sm">
                  Delete
                </Button>
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>Are you sure sure?</AlertDialogTitle>
                  <AlertDialogDescription>
                    You are about to delete the label{" "}
                    <Badge variant="outline" style={badgeStyle(color)}>
                      {label}
                    </Badge>{" "}
                    .
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>Cancel</AlertDialogCancel>
                  <AlertDialogAction onClick={onDelete}>
                    Delete
                  </AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          </div>
        </div>
        <AccordionContent>
          <form
            className="flex items-end gap-4"
            onSubmit={(e) => {
              onSubmit(e);
              setAccordionValue("");
            }}
          >
            <div className="w-full gap-3 grid">
              <Label htmlFor="name">Label name</Label>
              <Input
                ref={inputRef}
                id="name"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                className="h-8"
              />
            </div>
            <div className="gap-3 grid">
              <Label htmlFor="color">Color</Label>
              <Input
                id="color"
                type="color"
                value={colorValue}
                onChange={(e) => setColorValue(e.target.value)}
                className="h-8 px-2 py-1"
              />
            </div>
            <Button type="submit" disabled={disabled} size="sm">
              Save
            </Button>
          </form>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};