import { Pressable } from "react-native";

export type HeaderLeftActionProps = {
  children: React.ReactNode;
};

export default function HeaderLeftAction({ children }: HeaderLeftActionProps) {
  return (
    <Pressable>
      {children}
    </Pressable>
  );
}