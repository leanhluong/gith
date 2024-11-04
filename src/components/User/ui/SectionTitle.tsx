import React, { CSSProperties } from 'react';

interface SectionTitleProps {
	title?: string;
	style?: CSSProperties;
}

export const SectionTitle = ({ title, style }: SectionTitleProps) => {
	return (
		<p
			style={{
				fontSize: 18,
				textTransform: 'uppercase',
				fontWeight: 700,
				color: 'var(--bs-red)',
				margin: '20px 0',
				...style,
			}}
		>
			{title}
		</p>
	);
};
