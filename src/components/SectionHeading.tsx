// SectionHeading.tsx
import { Heading, HeadingProps } from '@chakra-ui/react';

interface SectionHeadingProps extends HeadingProps {
  title: string;
  style?: React.CSSProperties;
}

export const SectionHeading = ({ title, style, ...props }: SectionHeadingProps) => {
  return (
    <Heading
      mb="3rem"
      
      color="brand.primary"
      // style={style}
      // {...props}
    >
      {title}
    </Heading>
  );
};