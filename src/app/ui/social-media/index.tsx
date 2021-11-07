import { useTheme } from '~/app/hooks/use-theme'
import { Text, StyleSheet, View, Link, Style } from '~/react-pdf'

export interface SocialMediaProps {
  name: string
  profileUrl: string
  style?: Style
}

const styles = StyleSheet.create({
  name: {
    fontFamily: 'OpenSans',
    fontSize: 10,
  },
  username: {
    fontFamily: 'OpenSans',
    fontSize: 8,
    marginTop: 2,
  },
})

export function SocialMedia({ name, profileUrl, ...props }: SocialMediaProps) {
  const theme = useTheme()

  const username = `@${profileUrl.split('/').splice(-1)}`

  return (
    <Link src={profileUrl} {...props}>
      <View>
        <Text style={styles.name}>{name}</Text>
        <Text style={[styles.username, { color: theme.colors.text }]}>
          {username}
        </Text>
      </View>
    </Link>
  )
}