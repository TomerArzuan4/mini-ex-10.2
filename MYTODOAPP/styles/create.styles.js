import { StyleSheet } from "react-native";
import { COLORS, SPACING } from './Theme';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        gap: 10,
        padding: SPACING.xl,
        backgroundColor: COLORS.background
    },
    input: {
        borderWidth: 1,
        borderColor: COLORS.border,
        padding: SPACING.md,
        borderRadius: SPACING.md
    }
});