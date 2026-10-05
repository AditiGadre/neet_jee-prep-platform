import React, { Component, ErrorInfo, ReactNode } from 'react';
import { AlertTriangle, RotateCcw, Home } from 'lucide-react';

interface Props {
  children: ReactNode;
  fallbackTitle?: string;
  fallbackMessage?: string;
  onReset?: () => void;
}

interface State {
  hasError: boolean;
  error: Error | null;
  errorInfo: ErrorInfo | null;
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
    error: null,
    errorInfo: null
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error, errorInfo: null };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('ErrorBoundary caught an error:', error, errorInfo);
    (this as any).setState({ errorInfo });
  }

  public handleReload = () => {
    const props = (this as any).props as Props;
    if (props?.onReset) {
      props.onReset();
    }
    (this as any).setState({ hasError: false, error: null, errorInfo: null });
  };

  public render() {
    const props = (this as any).props as Props;
    if (this.state.hasError) {
      return (
        <div className="min-h-[400px] w-full flex items-center justify-center p-6 bg-sky-50 text-sky-950 rounded-2xl border border-sky-200 shadow-sm my-4">
          <div className="max-w-lg text-center space-y-4">
            <div className="w-14 h-14 mx-auto rounded-2xl bg-amber-100 border border-amber-200 flex items-center justify-center text-amber-600">
              <AlertTriangle className="w-8 h-8" />
            </div>

            <div className="space-y-1">
              <h3 className="text-lg font-bold text-sky-950">
                {props?.fallbackTitle || 'Something went wrong displaying this view'}
              </h3>
              <p className="text-xs text-sky-700 leading-relaxed">
                {props?.fallbackMessage ||
                  'The view encountered a temporary rendering issue. Your answers and test results have been safely preserved.'}
              </p>
            </div>

            {this.state.error && (
              <div className="p-3 bg-sky-50 rounded-xl text-left border border-sky-200">
                <p className="text-[11px] font-mono text-rose-700 font-semibold truncate">
                  {this.state.error.name}: {this.state.error.message}
                </p>
              </div>
            )}

            <div className="flex items-center justify-center gap-3 pt-2">
              <button
                onClick={this.handleReload}
                className="px-4 py-2.5 rounded-xl bg-orange-600 hover:bg-orange-700 text-white text-xs font-bold transition flex items-center gap-4 cursor-pointer shadow-sm"
              >
                <RotateCcw className="w-4 h-4" />
                <span>Try Again</span>
              </button>

              <button
                onClick={() => window.location.reload()}
                className="px-4 py-2.5 rounded-xl bg-sky-50/60 hover:bg-sky-50 border border-sky-300 text-sky-800 text-xs font-bold transition flex items-center gap-4 cursor-pointer"
              >
                <Home className="w-4 h-4" />
                <span>Reload Page</span>
              </button>
            </div>
          </div>
        </div>
      );
    }

    return (this as any).props?.children;
  }
}

