<script setup lang="ts">
import {
	IonBadge,
	IonButton,
	IonCard,
	IonCardContent,
	IonCardHeader,
	IonCardSubtitle,
	IonCardTitle,
	IonChip,
	IonCol,
	IonGrid,
	IonItem,
	IonLabel,
	IonList,
	IonNote,
	IonRow
} from '@ionic/vue';
import { storeToRefs } from 'pinia';

import useStore from '../stores/main';

const mainStore = useStore();
const { welcomeText } = storeToRefs(mainStore);

const features = [
	{
		number: '01',
		title: 'Responsive by default',
		body: 'Ionic Grid and responsive navigation carry the interface naturally from desktop to mobile.',
		tag: 'Ionic UI'
	},
	{
		number: '02',
		title: 'One Vue foundation',
		body: 'Routes, components, and Pinia state stay familiar across web, Capacitor, and Tauri targets.',
		tag: 'Vue + Pinia'
	},
	{
		number: '03',
		title: 'Flask behind the scenes',
		body: 'A focused Python service keeps API and business logic separate from the interface.',
		tag: 'Flask API'
	}
];
</script>

<template>
	<page>
		<main class="home-page">
			<section class="hero-section">
				<ion-grid class="home-container">
					<ion-row class="hero-row ion-align-items-center">
						<ion-col size="12" size-lg="6" class="hero-copy">
							<ion-badge color="success" class="hero-kicker">Vue on every screen</ion-badge>
							<h1>One interface.<br /><em>Everywhere it matters.</em></h1>
							<p class="hero-copy__lede">
								A practical Vue and Ionic foundation for responsive web experiences, backed by Flask and ready to travel to mobile or desktop.
							</p>
							<div class="hero-actions">
								<ion-button router-link="/about">Explore the starter</ion-button>
								<ion-button fill="clear" href="#features">See what is included</ion-button>
							</div>
							<div class="platform-chips" aria-label="Supported platforms">
								<ion-chip>Web</ion-chip>
								<ion-chip>iOS</ion-chip>
								<ion-chip>Android</ion-chip>
								<ion-chip>Desktop</ion-chip>
							</div>
						</ion-col>

						<ion-col size="12" size-lg="6">
							<ion-card class="starter-card">
								<ion-card-header>
									<div class="card-heading-row">
										<div>
											<ion-card-subtitle>Live application state</ion-card-subtitle>
											<ion-card-title>Starter status</ion-card-title>
										</div>
										<ion-badge color="success">Ready</ion-badge>
									</div>
								</ion-card-header>

								<ion-card-content>
									<div class="store-message">
										<strong>Pinia is connected</strong>
										<p>{{ welcomeText }}</p>
									</div>

									<ion-list class="status-list" lines="full">
										<ion-item>
											<ion-label><strong>Ionic Vue</strong><p>Responsive component system</p></ion-label>
											<ion-note slot="end" color="success">Active</ion-note>
										</ion-item>
										<ion-item>
											<ion-label><strong>Flask API</strong><p>Backend service boundary</p></ion-label>
											<ion-note slot="end">Ready</ion-note>
										</ion-item>
										<ion-item lines="none">
											<ion-label><strong>Multi-platform</strong><p>Web, mobile, and desktop targets</p></ion-label>
											<ion-note slot="end">4 targets</ion-note>
										</ion-item>
									</ion-list>
								</ion-card-content>
							</ion-card>
						</ion-col>
					</ion-row>
				</ion-grid>
			</section>

			<section id="features" class="feature-section">
				<ion-grid class="home-container">
					<ion-row>
						<ion-col size="12" size-lg="8" class="section-heading">
							<ion-badge color="light">A solid starting point</ion-badge>
							<h2>Built to move without starting over.</h2>
							<p>The foundations are already connected, so the next feature can be the one that makes your product useful.</p>
						</ion-col>
					</ion-row>

					<ion-row class="feature-grid">
						<ion-col v-for="feature in features" :key="feature.number" size="12" size-md="4">
							<ion-card class="feature-card">
								<ion-card-header>
									<ion-badge color="success">{{ feature.number }}</ion-badge>
									<ion-card-title>{{ feature.title }}</ion-card-title>
								</ion-card-header>
								<ion-card-content>
									<p>{{ feature.body }}</p>
									<ion-chip outline>{{ feature.tag }}</ion-chip>
								</ion-card-content>
							</ion-card>
						</ion-col>
					</ion-row>
				</ion-grid>
			</section>
		</main>
	</page>
</template>
