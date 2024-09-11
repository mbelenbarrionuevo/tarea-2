import { Tabs } from 'expo-router';

export default function Layout() {
  return (
    <Tabs
      screenOptions={{
        headerStyle: {
          height: 50, // Ajusta la altura del header
        },
        headerTitleAlign: 'center', // Alinea el título al centro horizontalmente
        headerTitleStyle: {
          fontSize: 18, // Ajusta el tamaño del texto
        },
       headerTitleContainerStyle: {
          marginTop: -50, // Ajusta el margen superior del contenedor del título
        },
        tabBarStyle: {
          height: 50, // Ajusta la altura del Tab Bar
          paddingBottom: 5, // Ajusta el padding inferior del Tab Bar
        },
        tabBarLabelStyle: {
          fontSize: 12, // Ajusta el tamaño de la fuente de las etiquetas en el Tab Bar
        },
      }}
    >
      <Tabs.Screen  name="contador" options={{ title: 'Contador' }} />
      <Tabs.Screen name="tarjetas" options={{ title: 'Tarjetas' }} />
      <Tabs.Screen name="perfil" options={{ title: 'Perfil' }} />
    </Tabs>
  );
}


