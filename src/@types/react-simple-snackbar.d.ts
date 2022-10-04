declare module "react-simple-snackbar" {
  export function useSnackbar(): [
    (node: React.ReactNode, duration?: number) => null,
    () => null
  ];

  const SnackbarProvider: React.FC;

  export default SnackbarProvider;
}
