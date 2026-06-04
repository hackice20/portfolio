export const PROJECTS_CSS = `
  @keyframes blink-green {
    0% {
      background-color: #14532d;
      box-shadow: 0 0 0 0 rgba(20, 83, 45, 0.7);
    }
    50% {
      background-color: #4ade80;
      box-shadow: 0 0 5px 2px rgba(74, 222, 128, 0.4);
    }
    100% {
      background-color: #14532d;
      box-shadow: 0 0 0 0 rgba(20, 83, 45, 0);
    }
  }

  .blinking-dot {
    height: 12px;
    width: 12px;
    border-radius: 50%;
    display: inline-block;
    animation: blink-green 1.5s infinite ease-in-out;
  }

  @media (prefers-reduced-motion: reduce) {
    .blinking-dot {
      animation: none;
      background-color: #14532d;
    }
  }
`;
