import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { supabase } from "../libs/supabase";

type ProtectedRouteProps = {
  children: React.ReactNode;
};

export default function ProtectedRoute({
  children,
}: ProtectedRouteProps) {
  const [loading, setLoading] = useState(true);
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    const checkUser = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();

      setAuthenticated(!!user);
      setLoading(false);
    };

    checkUser();
  }, []);

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[var(--color-cream)]">
        <p className="text-[var(--color-brown-dark)]">
          Loading...
        </p>
      </div>
    );
  }

  if (!authenticated) {
    return <Navigate to="/admin-login" replace />;
  }

  return <>{children}</>;
}