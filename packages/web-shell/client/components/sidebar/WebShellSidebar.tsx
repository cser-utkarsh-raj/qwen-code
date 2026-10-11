import {
  Fragment,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
  type CSSProperties,
  type KeyboardEvent as ReactKeyboardEvent,
  type PointerEvent as ReactPointerEvent,
  type ReactElement,
  type ReactNode,
} from 'react';
import {
  useActions,
  useChannels,
  useConnection,
  useWorkspace,
  useWorkspaceActions,
} from '@qwen-code/web-shell/daemon-react-sdk';
import {
  // Reconstructed from verified upstream source was not available here; stop.
} from './types';