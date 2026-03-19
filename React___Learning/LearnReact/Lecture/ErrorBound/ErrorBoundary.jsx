import { Component } from "react";

export class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
      errorInfo: null,
    };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    this.setState({ errorInfo });
    console.error("ErrorBoundary caught:", error, errorInfo);
  }

  resetError = () => {
    this.setState({
      hasError: false,
      error: null,
      errorInfo: null,
    });
  };

  render() {
    if (this.state.hasError) {
      const { fallback } = this.props;

      // SAFE CHECK (this fixes your crash)
      if (typeof fallback === "function") {
        return fallback(
          this.state.error,
          this.state.errorInfo,
          this.resetError
        );
      }

      return (
        <div className="m-4 border bg-red-100 p-3 text-red-700">
          <h1>Something went wrong</h1>
          <button onClick={this.resetError}>Try again</button>
        </div>
      );
    }

    return this.props.children;
  }
}