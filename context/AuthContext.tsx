import {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

interface AuthStateType {
  username: string | null;
  password: string | null;
}

interface AuthProps {
  authState: AuthStateType | null;
  onLogin: (username: string, password: string) => Promise<boolean>;
  onLogout: () => Promise<void>;
}

const AuthContext = createContext<AuthProps | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [authState, setAuthState] = useState<AuthStateType | null>(null);

  useEffect(() => {
    const loadAuthData = async () => {
      try {
        const username = await AsyncStorage.getItem("username");
        const password = await AsyncStorage.getItem("password");
        if (username && password) {
          setAuthState({ username, password });
        }
      } catch (error) {
        console.error("Error loading auth data", error);
      }
    };
    loadAuthData();
  }, []);

  const login = async (username: string, password: string) => {
    if (username === "yunus1414" && password === "yunus1414") {
      await AsyncStorage.setItem("username", username);
      await AsyncStorage.setItem("password", password);
      setAuthState({ username, password });
      return true;
    } else {
      setAuthState(null);
      return false;
    }
  };

  const logout = async () => {
    await AsyncStorage.removeItem("username");
    await AsyncStorage.removeItem("password");
    setAuthState(null);
  };

  const value = { authState, onLogin: login, onLogout: logout };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
