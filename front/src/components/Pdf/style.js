import { StyleSheet } from "@react-pdf/renderer";
// Create styles
export const styles = StyleSheet.create({
  page: {
    flexDirection: "column",
    backgroundColor: "#FFF",
  },
  section: {
    margin: 10,
    padding: 5,
    flexGrow: 1,
    fontSize: 12,
  },
  card: {
    flexDirection: "row",
    border: "2px solid",
    borderWidth: 1,
  },
});
