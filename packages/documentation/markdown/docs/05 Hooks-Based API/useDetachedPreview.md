---
path: '/docs/api/use-detached-preview'
title: 'useDragPreview'
---

## EXPERIMENTAL API - UNSTABLE

_New to React DnD? [Read the overview](/docs/overview) before jumping into the docs._

# useDetachedPreview

A hook to use a component as a detached drag preview

```js
import { __EXPERIMENTAL_DND_HOOKS_THAT_MAY_CHANGE_AND_BREAK_MY_BUILD__ as dnd } from 'react-dnd'
const { useDetachedPreview } = dnd

function DragLayerPreview(props) {
  const DragPreview = useDetachedPreview(MyRefForwardingComponent)
  const [, drag, preview] = useDrag({
    item: { id, type },
  })

  return (
    <>
      <DragPreview previewRef={preview} />
      <div ref={drag}>...</div>
    </>
  )
}
```

#### Parameters

- **`dragPreview`** A refForwarding component that will render the drag preview.

#### Return Value

This hook returns a component that will render into a detached DOM node via a React Portal. This is useful for rendering disconnected Drag Previews.