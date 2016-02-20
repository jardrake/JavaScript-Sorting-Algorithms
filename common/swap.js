function swap(items, firstIndex, secondIndex){
	if(firstIndex != secondIndex) {
		var temp = items[firstIndex];
		items[firstIndex] = items[secondIndex];
		items[secondIndex] = temp;
	}
}