import { useState } from 'react';
import { Image, Pressable, ScrollView, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context';

import { ASSETS } from './assets';
import styles from './globalStyles';
import { COLORS } from './theme';

const SECTIONS = [
  {
    title: 'Restaurantes',
    cards: [
      { emoji: '🍝', title: 'Trattoria Bella', subtitle: 'Massas e vinhos · Centro' },
      { emoji: '🍜', title: 'Sabor Oriental', subtitle: 'Culinária japonesa · Vila Nova' },
      { emoji: '🥗', title: 'Verde Vivo', subtitle: 'Cozinha leve e vegana · Jardins' },
    ],
  },
  {
    title: 'Lugares',
    cards: [
      { emoji: '🏞️', title: 'Parque das Águas', subtitle: 'Natureza e trilhas · Zona Sul' },
      { emoji: '🖼️', title: 'Museu da Cidade', subtitle: 'Cultura e história · Centro' },
      { emoji: '☕', title: 'Café Aurora', subtitle: 'Grãos especiais · Vila Mariana' },
    ],
  },
  {
    title: 'Atividades',
    cards: [
      { emoji: '🏃', title: 'Corrida no Parque', subtitle: 'Sábado · 7h' },
      { emoji: '🧘', title: 'Aula de Yoga', subtitle: 'Domingo · 9h' },
      { emoji: '⚽', title: 'Futebol Society', subtitle: 'Quartas · 20h' },
    ],
  },
  {
    title: 'Experiências',
    cards: [
      { emoji: '🎨', title: 'Oficina de Cerâmica', subtitle: 'Arte e criação · R$ 80' },
      { emoji: '🚲', title: 'Passeio de Bicicleta', subtitle: 'Turismo guiado · R$ 40' },
      { emoji: '🎶', title: 'Noite de MPB', subtitle: 'Show ao vivo · R$ 60' },
    ],
  },
];

const NAV_ITEMS = [
  { key: 'home', label: 'Início', emoji: '🏠' },
  { key: 'explore', label: 'Explorar', emoji: '🔍' },
  { key: 'create', label: 'Criar', emoji: '➕' },
  { key: 'favorites', label: 'Favoritos', emoji: '❤️' },
  { key: 'profile', label: 'Perfil', emoji: '👤' },
];

export default function HomeScreen() {
  const [activeTab, setActiveTab] = useState('home');

  return (
    <SafeAreaView edges={['top']} style={styles.appBackground}>
      <StatusBar style="dark" backgroundColor={COLORS.white} />

      <View style={styles.homeHeader}>
        <Image source={ASSETS.logo} style={styles.homeLogo} resizeMode="contain" />
        <View style={styles.homeHeaderIcons}>
          <View style={styles.homeHeaderButton}>
            <Text style={styles.homeHeaderEmoji}>🔍</Text>
          </View>
          <View style={styles.homeHeaderButton}>
            <Text style={styles.homeHeaderEmoji}>❤️</Text>
          </View>
        </View>
      </View>

      <ScrollView
        contentContainerStyle={styles.feedContent}
        showsVerticalScrollIndicator={false}
      >
        {SECTIONS.map((section) => (
          <View key={section.title} style={styles.feedSection}>
            <View style={styles.feedSectionHeader}>
              <Text style={styles.feedSectionTitle}>{section.title}</Text>
              <Text style={styles.feedSectionLink}>Ver tudo</Text>
            </View>
            <ScrollView
              contentContainerStyle={styles.feedRow}
              horizontal
              showsHorizontalScrollIndicator={false}
            >
              {section.cards.map((card) => (
                <View key={card.title} style={styles.feedCard}>
                  <View style={styles.feedCardImage}>
                    <Text style={styles.feedCardEmoji}>{card.emoji}</Text>
                  </View>
                  <View style={styles.feedCardBody}>
                    <Text style={styles.feedCardTitle}>{card.title}</Text>
                    <Text style={styles.feedCardSubtitle}>{card.subtitle}</Text>
                  </View>
                </View>
              ))}
            </ScrollView>
          </View>
        ))}
      </ScrollView>

      <View style={styles.bottomNav}>
        {NAV_ITEMS.map((item) => (
          <Pressable
            accessibilityRole="button"
            key={item.key}
            onPress={() => setActiveTab(item.key)}
            style={({ pressed }) => [styles.navItem, pressed && styles.pressed]}
          >
            <Text style={styles.navIcon}>{item.emoji}</Text>
            <Text
              style={[styles.navLabel, activeTab === item.key && styles.navLabelActive]}
            >
              {item.label}
            </Text>
          </Pressable>
        ))}
      </View>
    </SafeAreaView>
  );
}
