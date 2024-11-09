interface SegmentedControlOption<T> {
	label: string;
	value: T;
}

export interface SegmentedControlProps<T = string> {
	options: SegmentedControlOption<T>[];
	value: T;
}
