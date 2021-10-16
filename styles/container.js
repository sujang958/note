import { StyleSheet } from "react-native"
import theme from "./theme"

export const homeContainer = StyleSheet.create({
  container: {
    padding: 24,
    width: "100%",
    height: "100%",
    backgroundColor: theme.black,
  },
  header: {
    flex: 1.05,
  },
  headerText: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  themeSelector: {},
  searchInput: {
    color: theme.lightGray,
    borderRadius: 15,
    marginTop: -15,
    flex: 1.25,
    backgroundColor: theme.darkGray,
    paddingHorizontal: 12,
    fontSize: 18,
  },
  body: {
    flex: 4,
  },
  footer: {
    flex: 0.5,
    backgroundColor: "tomato",
  },
})
