interface CardProps {
	p: string;
	py: string;
	pe: string;
}

declare namespace JSX {
	interface IntrinsicElements {
		Card: { requiredProp: string; optionalProp?: number; p: string };
	}
}
