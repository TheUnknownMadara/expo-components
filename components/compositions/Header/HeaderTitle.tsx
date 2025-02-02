import Paragraph from "@/components/primitives/Paragraph";
import { TextProps } from "react-native";
import { SIZES } from "../../../theme/sizes";

export type HeaderTitleProps = TextProps & {
  title: string;
  style?: TextProps['style'];
};
export default function HeaderTitle({ title, style }: HeaderTitleProps) {
  return (
    <Paragraph
    style={{
      fontSize: SIZES.text.fontSize.h2,
      lineHeight: 50,
      fontFamily: 'SpaceMono-Bold',
      ...style as any,
    }}
  >
    {title}
  </Paragraph>
  );
}