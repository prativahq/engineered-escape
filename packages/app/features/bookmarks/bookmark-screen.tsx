import React, { useState, useEffect } from 'react'
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'
import { useBookmarks } from './context'
import { Image } from 'tamagui'
import { Card, XStack, YStack } from 'tamagui'
import { fetchBlogPosts } from 'packages/app/utils/api'
import { useNavigation } from '@react-navigation/native'

export function BookmarksScreen() {
  const { bookmarks } = useBookmarks()
  const [blogPosts, setBlogPosts] = useState([])
  const navigation = useNavigation()

  return (
    <SafeAreaView style={{ flex: 1, paddingTop: 8 }}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <YStack f={1} backgroundColor={'#FFFFFF'} p="$5" pt="$8">
          <Text style={styles.title}>Bookmarked Blogs</Text>
          {bookmarks.map((blog) => (
            <View key={blog.blogId}>
              <Text style={styles.blogTitle}>{blog.title}</Text>
            </View>
          ))}
        </YStack>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
  },
  cardContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  thumbnail: {
    width: 100,
    height: 100,
    borderRadius: 8,
    marginRight: 16,
  },
  textContainer: {
    flex: 1,
  },
  blogTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  blogDate: {
    fontSize: 14,
    color: '#888',
    marginBottom: 4,
  },
  blogCategory: {
    fontSize: 14,
    color: '#888',
    marginBottom: 4,
  },
  blogAuthor: {
    fontSize: 14,
    color: '#888',
  },
})

export default BookmarksScreen
