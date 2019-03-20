import * as React from 'react'
import { useMemo } from 'react'
import { createPortal } from 'react-dom'

export type PreviewRefProps<Props> = Props & { previewRef: React.Ref<any> }

/**
 * A utility for rendering a component into a detached portal. Useful for things like drag previews.
 * @param DragPreview The drag preview component to render
 */
export function useDetachedPreview<Props>(
	Component: React.RefForwardingComponent<Element, Props>,
): React.FC<PreviewRefProps<Props>> {
	// render the component into a detached element to prevent it from appearing too early
	const root = useMemo(() => document.createElement('div'), [Component])
	return useMemo(
		() => (props: PreviewRefProps<Props>) => {
			return createPortal(<Component ref={props.previewRef} {...props} />, root)
		},
		[Component],
	)
}