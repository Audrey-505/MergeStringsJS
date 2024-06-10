class MergeString {
    mergeStrings(stringOne, stringTwo) {
        for (let i = 0; i < stringOne.length; i++) {
            if (stringTwo.startsWith(stringOne.substring(i))) {
                return stringOne.substring(0, i) + stringTwo;
            }
        }
        return stringOne + stringTwo;
    }
}

