import { View, Text, StyleSheet } from 'react-native';
import { useTheme } from '@shopify/restyle';
import { Theme } from '../theme';

interface DescProps {
  desc?: string | string[];
  theme: Theme;
}

export const Desc = ({ desc, theme }: DescProps) => {
  const styles = createStyles({
    desc: theme.colors.text,
  });

  if (Array.isArray(desc) && desc.length) {
    const descs: string[] = desc as string[];
    return (
      <View>
        {descs.map((item, index) => (
          <Text style={styles.desc} key={index}>
            {item}
          </Text>
        ))}
      </View>
    );
  }
  return <Text style={styles.desc}>{desc}</Text>;
};

function createStyles({ desc = '#5e6d82' }) {
  return StyleSheet.create({
    desc: {
      color: desc,
      fontSize: 14,
      marginTop: 10,
      lineHeight: 20,
    },
  });
}
