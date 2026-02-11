# Analyse Comparative des Plateformes ML Cloud : AWS SageMaker vs Google Vertex AI vs Azure Machine Learning

**Date de recherche** : 2026-02-10
**Auteur** : Naskal Domain Analyst -- Claude Code Edition
**Domaine** : Plateformes de Machine Learning managees des trois principaux fournisseurs cloud (AWS, GCP, Azure)

---

## Table des matieres

1. [Presentation des plateformes](#1-presentation-des-plateformes)
2. [Comparaison fonctionnelle detaillee](#2-comparaison-fonctionnelle-detaillee)
3. [Comparaison tarifaire](#3-comparaison-tarifaire)
4. [Forces et faiblesses](#4-forces-et-faiblesses)
5. [Recommandations](#5-recommandations)
6. [Tendances 2025-2026](#6-tendances-2025-2026)
7. [Sources](#7-sources)

---

## 1. Presentation des plateformes

### 1.1 AWS SageMaker

#### Vue d'ensemble

Amazon SageMaker est la plateforme ML phare d'AWS, offrant un environnement complet et integre pour construire, entrainer et deployer des modeles de machine learning a grande echelle. Depuis fin 2025, SageMaker s'est transforme en **SageMaker Unified Studio**, un environnement unifie combinant donnees, analytique et IA dans une seule interface.

SageMaker Unified Studio regroupe desormais les fonctionnalites d'Amazon EMR, AWS Glue, Amazon Athena, Amazon Redshift, Amazon MWAA, Amazon Bedrock et SageMaker AI, permettant aux utilisateurs de decouvrir, acceder et interroger des donnees et des actifs IA depuis un seul point d'entree.

#### Fonctionnalites cles

| Composant | Description | Statut |
|-----------|-------------|--------|
| **SageMaker Studio** | IDE integre avec JupyterLab, notebooks collaboratifs, connexion VS Code | GA |
| **SageMaker Pipelines** | Orchestration de workflows ML natif, CI/CD ML | GA |
| **SageMaker HyperPod** | Infrastructure dediee pour entrainement distribue a grande echelle | GA |
| **SageMaker Feature Store** | Store centralise pour features ML (online/offline) | GA |
| **SageMaker Model Registry** | Catalogue de modeles avec versioning et approbation | GA |
| **SageMaker Clarify** | Biais, equite et explicabilite des modeles | GA |
| **SageMaker Ground Truth** | Labeling de donnees (humain + ML) | GA |
| **SageMaker Data Wrangler** | Preparation de donnees avec 300+ transformations | GA |
| **SageMaker Canvas** | ML no-code avec interface visuelle | GA |
| **SageMaker Autopilot** | AutoML complet | GA |
| **Amazon Bedrock** | Modeles fondamentaux (Claude, Llama, Mistral, etc.) | GA |
| **SageMaker Data Agent** | Agent IA pour analyses complexes en langage naturel | Preview |

#### Ecosysteme et integrations

- **Infrastructure** : Integration native avec EC2, S3, EBS, EFS, FSx for Lustre
- **Donnees** : Connexion directe a Athena, Redshift, Glue, Lake Formation
- **DevOps** : Integration avec CodePipeline, CodeBuild, CloudFormation, CDK
- **Monitoring** : CloudWatch, SageMaker Model Monitor, Model Dashboard
- **Securite** : IAM, VPC, KMS, PrivateLink, SageMaker Role Manager
- **IaC** : Terraform, CloudFormation, CDK
- **GenAI** : Amazon Bedrock avec ~100 modeles serverless + 100 via Marketplace

---

### 1.2 Google Vertex AI

#### Vue d'ensemble

Vertex AI est la plateforme ML unifiee de Google Cloud, concue pour construire, deployer et gerer des modeles de ML et d'IA generative. Elle se distingue par son integration native avec l'ecosysteme Google (BigQuery, Dataflow, Dataproc) et par l'acces exclusif aux **TPU** (Tensor Processing Units), les accelerateurs materiels conçus par Google specifiquement pour le ML.

Vertex AI donne acces au **Model Garden**, un catalogue de plus de 200 modeles incluant les modeles proprietaires Google (Gemini 2.5, Gemini 3, Gemma), ainsi qu'une selection de modeles partenaires et open source.

#### Fonctionnalites cles

| Composant | Description | Statut |
|-----------|-------------|--------|
| **Vertex AI Workbench** | Notebooks Jupyter avec VM personnalisables | GA |
| **Colab Enterprise** | Notebooks collaboratifs manages avec securite cloud | GA |
| **Vertex AI Pipelines** | Orchestration ML basee sur Kubeflow/TFX | GA |
| **Vertex AI Feature Store** | Store de features centralise | GA |
| **Vertex AI Model Registry** | Catalogue et versioning de modeles | GA |
| **AutoML** | Entrainement automatise sans code | GA |
| **Custom Training** | Entrainement personnalise avec GPU/TPU | GA |
| **Model Garden** | Catalogue de 200+ modeles fondamentaux | GA |
| **Vertex AI Agent Engine** | Moteur d'agents IA avec memoire persistante | GA |
| **Vertex AI Studio** | Interface pour tester et personnaliser les modeles GenAI | GA |
| **Vertex AI Experiments** | Tracking d'experiences ML | GA |
| **Pipelines Template Gallery** | Templates pre-construits pour workflows MLOps | Preview |

#### Ecosysteme et integrations

- **Infrastructure** : Integration native avec GCE, Cloud Storage, Cloud TPU
- **Donnees** : BigQuery (integration profonde), Dataflow, Dataproc Serverless Spark
- **DevOps** : Cloud Build, Cloud Deploy, Artifact Registry
- **Monitoring** : Cloud Monitoring, Model Monitoring natif
- **Securite** : IAM, VPC-SC, CMEK, Data Residency
- **IaC** : Terraform, gcloud CLI
- **GenAI** : Gemini 2.5/3 Pro/Flash, PaLM, Imagen, Codey
- **Open Source** : Support natif Kubeflow, TFX, KFP SDK

---

### 1.3 Azure Machine Learning

#### Vue d'ensemble

Azure Machine Learning est la plateforme ML de Microsoft, integree dans l'ecosysteme plus large **Azure AI Foundry** (anciennement Azure AI Studio). Elle se distingue par son integration profonde avec l'ecosysteme Microsoft (Visual Studio Code, GitHub, Microsoft 365, Power Platform) et par l'acces exclusif aux modeles **GPT-5.x** via Azure OpenAI Service.

Microsoft a ete reconnu comme **Leader** dans le Gartner Magic Quadrant 2025 pour les plateformes de Data Science et ML pour la deuxieme annee consecutive.

#### Fonctionnalites cles

| Composant | Description | Statut |
|-----------|-------------|--------|
| **Azure ML Studio** | Interface web pour la gestion des experiences ML | GA |
| **Compute Instances** | Stations de travail cloud avec Jupyter, VS Code | GA |
| **Azure ML Pipelines** | Orchestration de workflows ML | GA |
| **Model Registry** | Registre cross-workspace avec versioning | GA |
| **AutoML** | Entrainement automatise (tabular, NLP, vision) | GA |
| **Designer** | Interface drag-and-drop pour pipelines ML | GA |
| **Responsible AI Dashboard** | Outils d'equite, explicabilite, diagnostic | GA |
| **Managed Endpoints** | Endpoints online et batch manages | GA |
| **Prompt Flow** | Interface visuelle pour workflows GenAI | GA |
| **Azure AI Foundry** | Plateforme unifiee pour apps IA | GA |
| **Azure OpenAI Service** | GPT-5/5.1/5.2, DALL-E, Whisper | GA |
| **Confidential ML** | ML avec chiffrement Intel SGX | Preview |

#### Ecosysteme et integrations

- **Infrastructure** : Azure VMs (NC/ND/H series), Azure Blob Storage, Azure Kubernetes Service
- **Donnees** : Azure Synapse Analytics, Azure Data Factory, Azure Data Lake
- **DevOps** : Azure DevOps, GitHub Actions, VS Code integration native
- **Monitoring** : Azure Monitor, Application Insights, Model Monitor
- **Securite** : Azure AD, RBAC, Private Endpoints, Managed Identity, Confidential Computing
- **IaC** : Terraform, Bicep, ARM Templates
- **GenAI** : Azure OpenAI (GPT-5.x, DALL-E), Azure AI Foundry
- **Entreprise** : Power BI, Dynamics 365, Microsoft Fabric

---

## 2. Comparaison fonctionnelle detaillee

### 2.1 Preparation des donnees

| Fonctionnalite | AWS SageMaker | Google Vertex AI | Azure ML |
|----------------|---------------|------------------|----------|
| **Labeling** | Ground Truth (humain + ML actif) + Ground Truth Plus (manage) | Vertex AI Data Labeling (humain + ML actif) | Azure ML Data Labeling (humain + ML assiste) |
| **Feature Store** | SageMaker Feature Store (online/offline, temps reel) | Vertex AI Feature Store (BigQuery natif) | Azure ML Feature Store (Managed Feature Store) |
| **Preparation** | Data Wrangler (300+ transformations, sans code) | BigQuery + Dataproc Serverless Spark + Dataflow | Azure Synapse + Data Factory + Data Wrangler |
| **Pipelines de donnees** | Glue, EMR, Athena integres dans Unified Studio | Dataflow, Dataproc, BigQuery natifs | Data Factory, Synapse Pipelines |
| **Qualite des donnees** | Data Wrangler (evaluation automatique) | BigQuery Data Quality | Azure Data Quality (via Purview) |

**Analyse** :

- **AWS** excelle avec Ground Truth et Ground Truth Plus qui offrent le labeling le plus complet du marche, avec support humain (Mechanical Turk, fournisseurs tiers, equipes privees) et ML actif. Data Wrangler offre 300+ transformations pre-construites sans code. Le Feature Store est mature avec modes online (latence <10ms) et offline.

- **GCP** tire parti de l'integration profonde avec BigQuery, ce qui en fait le choix naturel pour les organisations deja investies dans l'ecosysteme Google data. Le Feature Store s'integre nativement avec BigQuery pour les requetes analytiques. Dataproc Serverless Spark est ideal pour le traitement a grande echelle.

- **Azure** offre une bonne integration avec l'ecosysteme Microsoft data (Synapse, Data Factory) mais le Feature Store est plus recent et moins mature que les alternatives. L'integration avec Microsoft Fabric apporte cependant une dimension analytique puissante.

---

### 2.2 Entrainement de modeles

#### Instances GPU/TPU disponibles

| Instance / Accelerateur | AWS SageMaker | Google Vertex AI | Azure ML |
|--------------------------|---------------|------------------|----------|
| **NVIDIA H100** | ml.p5.48xlarge (8x H100) | a3-highgpu-8g (8x H100) | Standard_ND96isr_H100_v5 (8x H100) |
| **NVIDIA H200** | ml.p5en (H200) | a3-ultragpu-8g (8x H200) | ND H200 v5 (8x H200) |
| **NVIDIA A100** | ml.p4d.24xlarge (8x A100) | a2-ultragpu-8g (8x A100) | Standard_ND96asr_v4 (8x A100) |
| **NVIDIA L4** | ml.g6.xlarge a 48xlarge | g2-standard (1-8x L4) | Standard_NC (L4 series) |
| **Google TPU** | Non disponible | TPU v5e, v6e, Trillium, v7x Ironwood | Non disponible |
| **AWS Trainium** | ml.trn1 (Trainium), ml.trn2 | Non disponible | Non disponible |
| **Bare-metal GPU** | ml.p5.48xlarge | A3 Mega | ND H100 v5 |

#### Entrainement distribue

| Capacite | AWS SageMaker | Google Vertex AI | Azure ML |
|----------|---------------|------------------|----------|
| **Orchestration** | SageMaker HyperPod (Slurm/EKS) | Vertex AI Training (Kubeflow) | Azure ML Compute Clusters |
| **Scaling** | Centaines/milliers d'accelerateurs | Multi-node GPU/TPU pods | Multi-node avec InfiniBand |
| **Resilience** | Checkpointless training (80-93% reduction recovery) | Checkpoint auto + reprise | Checkpoint + reprise |
| **Elasticite** | Elastic Training (HyperPod, dec. 2025) | Autoscaling natif | Autoscaling clusters |
| **Libs distribuees** | SageMaker Distributed Training, DeepSpeed, Megatron | Reduction Server, DeepSpeed | DeepSpeed, Horovod, NCCL |
| **Gain temps** | Jusqu'a 40% reduction temps entrainement | TPU v6e : 2.1x perf/$ vs v5e | RDMA + InfiniBand (NC/ND/H series) |

#### AutoML

| Capacite | AWS SageMaker | Google Vertex AI | Azure ML |
|----------|---------------|------------------|----------|
| **Service** | SageMaker Autopilot | Vertex AI AutoML | Azure AutoML |
| **Types supportes** | Tabular, texte, images, series temporelles | Tabular, images, texte, video | Tabular, NLP, images, series temporelles |
| **Optimisation** | Bayesian, Random Search, warm starting | Neural Architecture Search | Bayesian, Random, Grid, Bandit |
| **Explicabilite** | Clarify integre | Explainability natif | Responsible AI Dashboard |
| **Custom metrics** | Oui | Oui | Oui |

**Analyse** :

- **AWS** se demarque avec **SageMaker HyperPod**, l'infrastructure la plus avancee pour l'entrainement distribue a tres grande echelle. Les innovations de fin 2025 (checkpointless training, elastic training) reduisent significativement le temps et le cout d'entrainement. L'ajout de Trainium (puces custom AWS) offre une alternative economique aux GPU NVIDIA. Autopilot est un AutoML mature et complet.

- **GCP** possede un avantage unique avec les **TPU** (Tensor Processing Units). Le TPU v6e offre jusqu'a 2.1x d'amelioration du rapport performance/prix par rapport au v5e, et le TPU v7x Ironwood (7e generation) supporte l'entrainement et l'inference de grands modeles. Pour les workloads TensorFlow et JAX, les TPU offrent des performances superieures aux GPU. Le Reduction Server ameliore le throughput de l'entrainement distribue.

- **Azure** propose des clusters GPU avec InfiniBand et RDMA (series NC, ND, H) pour l'entrainement distribue haute performance. L'integration native avec DeepSpeed (developpe par Microsoft Research) est un atout majeur pour l'entrainement de grands modeles. Le Confidential ML avec Intel SGX v4 est un differenciateur unique pour les secteurs regules.

---

### 2.3 MLOps

| Capacite | AWS SageMaker | Google Vertex AI | Azure ML |
|----------|---------------|------------------|----------|
| **Versioning modeles** | Model Registry avec metadata, metriques, approbation | Model Registry avec versioning cross-region | Registry cross-workspace, multi-environnement |
| **Pipelines CI/CD** | SageMaker Pipelines + CodePipeline/CodeBuild | Vertex AI Pipelines (Kubeflow) + Cloud Build | Azure ML Pipelines + Azure DevOps/GitHub Actions |
| **Experiment Tracking** | SageMaker Experiments | Vertex AI Experiments | Azure ML Experiments |
| **Model Monitoring** | SageMaker Model Monitor + Model Dashboard | Vertex AI Model Monitoring | Azure ML Monitor + Responsible AI Dashboard |
| **Lineage** | SageMaker Lineage Tracking | Vertex AI Metadata Store | Azure ML Lineage |
| **Gouvernance** | SageMaker Model Cards + Role Manager | Vertex AI Model Cards | Azure ML Model Cards + RBAC |
| **Feature Store** | SageMaker Feature Store (online/offline) | Vertex AI Feature Store (BigQuery) | Azure ML Managed Feature Store |
| **Drift Detection** | Model Monitor (data drift, model quality) | Model Monitoring (skew, drift) | Drift Detection integreed |

**Analyse** :

- **AWS** offre la suite MLOps la plus complete et mature. SageMaker Pipelines est puissant et natif (pas de dependance a Kubeflow), le Model Registry supporte des workflows d'approbation cross-compte, et le Model Dashboard centralise la surveillance. Les Model Cards facilitent la gouvernance et la documentation.

- **GCP** s'appuie sur **Kubeflow** comme standard ouvert pour les pipelines, ce qui offre plus de portabilite. La Pipelines Template Gallery (Preview en 2025) simplifie la creation de workflows MLOps avec des templates pre-construits par Google. L'integration avec BigQuery pour le Feature Store est un avantage pour l'analytique.

- **Azure** beneficie de l'integration la plus fluide avec les outils DevOps existants (Azure DevOps, GitHub Actions). Le registre cross-workspace est ideal pour les grandes organisations avec plusieurs equipes. Le Responsible AI Dashboard est le plus complet des trois pour l'IA responsable. L'integration avec Microsoft Fabric apporte des capacites analytiques uniques.

---

### 2.4 Deploiement et Serving

| Mode de deploiement | AWS SageMaker | Google Vertex AI | Azure ML |
|---------------------|---------------|------------------|----------|
| **Temps reel** | Real-Time Endpoints (auto-scaling, multi-modele) | Online Prediction (Dedicated/PSC endpoints) | Managed Online Endpoints (auto-scaling) |
| **Batch** | Batch Transform (jusqu'a 100 MB par mini-batch) | Batch Prediction (BigQuery/GCS) | Batch Endpoints (provisioning auto) |
| **Serverless** | Serverless Inference (jusqu'a 6 GB RAM, 60s timeout) | Serverless (via Cloud Run integration) | Serverless Compute (auto GPU selection) |
| **Asynchrone** | Asynchronous Inference (jusqu'a 1 GB payload, 1h) | Non natif (via Pub/Sub) | Non natif (via Event Grid) |
| **Streaming** | Non natif | streamRawPredict (bidirectionnel) | Non natif |
| **Edge** | IoT Greengrass + SageMaker Edge Manager | Google Distributed Cloud Edge + Coral TPU | Azure IoT Edge |
| **Multi-modele** | Multi-Model Endpoints | Oui (multiples deploiements par endpoint) | Oui (multiples deploiements par endpoint) |
| **Protocoles** | REST, gRPC | REST, gRPC, streaming bidirectionnel | REST |

**Analyse** :

- **AWS** offre la palette de deploiement la plus riche avec 4 modes distincts (temps reel, batch, serverless, asynchrone). L'inference asynchrone (jusqu'a 1 GB de payload, 1h de traitement) est unique et ideale pour les workloads GenAI lourds. Les Multi-Model Endpoints permettent d'heberger des centaines de modeles sur un meme endpoint.

- **GCP** se distingue par le support du **streaming bidirectionnel** (streamRawPredict), essentiel pour les applications GenAI conversationnelles. Les endpoints dedies avec Private Service Connect offrent des performances optimales et une securite renforcee. Le support natif de gRPC est un avantage pour les applications a haute performance.

- **Azure** propose des endpoints manages avec auto-scaling et zero cout en mode batch (facturation uniquement lors de l'execution du job). L'integration avec Azure Kubernetes Service (AKS) offre une flexibilite maximale pour les deploiements complexes. Le Serverless Compute avec selection automatique de GPU simplifie le deploiement.

---

### 2.5 Notebooks et environnements de developpement

| Fonctionnalite | AWS SageMaker | Google Vertex AI | Azure ML |
|----------------|---------------|------------------|----------|
| **IDE principal** | SageMaker Studio (JupyterLab) | Colab Enterprise + Vertex AI Workbench | Azure ML Studio (Jupyter, VS Code) |
| **Notebooks manages** | SageMaker Notebooks (ml.t3, GPU, etc.) | Colab Enterprise (manage, collaboratif) | Compute Instances (Jupyter, JupyterLab) |
| **VS Code** | Connexion distante VS Code (2025) | Non natif (via SSH) | VS Code for Web + VS Code Desktop (natif) |
| **Collaboration** | Edition temps reel (2025) | Colab Enterprise (partage natif) | Partage de fichiers via file share |
| **Pre-installe** | SageMaker Distribution (PyTorch, TF, etc.) | Pre-configure avec TF, PyTorch, JAX | Azure ML SDK, TF, PyTorch, scikit-learn |
| **Agent IA** | Amazon Q Developer (assistance code) | Gemini Code Assist | GitHub Copilot (natif) |
| **No-code** | SageMaker Canvas | Vertex AI AutoML + Studio | Designer (drag-and-drop) |

**Analyse** :

- **AWS** a fait un bond en 2025 avec SageMaker Unified Studio : edition collaborative en temps reel, Data Agent pour l'analyse en langage naturel, et connexion VS Code distante. L'integration d'Amazon Q Developer fournit une assistance IA dans les notebooks.

- **GCP** offre deux environnements complementaires : **Colab Enterprise** (collaboratif, manage, ideal pour data scientists) et **Vertex AI Workbench** (controle complet, ideal pour ML engineers). L'integration avec BigQuery est un atout unique pour l'analyse exploratoire.

- **Azure** possede l'integration VS Code la plus profonde et mature des trois, ce qui est un avantage significatif pour les developpeurs. VS Code for Web et Desktop sont tous deux supportes nativement, avec synchronisation complete avec Azure ML Studio. L'integration native de GitHub Copilot est un differenciateur majeur.

---

### 2.6 Support des frameworks

| Framework | AWS SageMaker | Google Vertex AI | Azure ML |
|-----------|---------------|------------------|----------|
| **PyTorch** | Natif (conteneurs pre-construits) | Natif (conteneurs pre-construits) | Natif (conteneurs pre-construits) |
| **TensorFlow** | Natif | Natif (developpe par Google) | Natif |
| **JAX** | Supporte (via conteneurs custom) | Natif (optimise pour TPU) | Supporte (via conteneurs custom) |
| **scikit-learn** | Natif (conteneurs pre-construits) | Natif | Natif |
| **XGBoost** | Natif (conteneurs pre-construits, optimise) | Natif | Natif |
| **Hugging Face** | Integration profonde (Deep Learning Containers) | Supporte via conteneurs | Supporte via conteneurs |
| **ONNX** | Supporte | Supporte | Natif (ONNX Runtime par Microsoft) |
| **MXNet** | Natif | Supporte | Supporte |
| **Keras** | Via TensorFlow | Via TensorFlow/JAX | Via TensorFlow |
| **Ray** | SageMaker HyperPod supporte | Supporte | Supporte |
| **DeepSpeed** | Supporte | Supporte | Natif (developpe par Microsoft) |
| **Custom containers** | Oui (Docker) | Oui (Docker) | Oui (Docker) |

**Analyse** :

- **AWS** offre le support le plus large avec des conteneurs pre-construits et optimises pour la plupart des frameworks. L'integration avec Hugging Face est particulierement profonde. Le support de Trainium est specifique a AWS.

- **GCP** excelle avec TensorFlow (cree par Google) et JAX (optimise pour TPU). Pour les workloads JAX, GCP est le choix naturel grace a l'optimisation hardware TPU + JAX. Keras 3.0 avec multi-backend est nativement supporte.

- **Azure** se demarque avec ONNX Runtime (cree par Microsoft) pour l'inference optimisee et DeepSpeed (cree par Microsoft Research) pour l'entrainement distribue de grands modeles. Ces deux contributions open source majeures sont un avantage technique significatif.

---

### 2.7 Modeles pre-entraines et Foundation Models

| Aspect | AWS Bedrock | Google Model Garden | Azure OpenAI / AI Foundry |
|--------|-------------|---------------------|---------------------------|
| **Modeles proprietaires** | Amazon Titan (texte, image, embeddings) | Gemini 2.5/3 Pro/Flash, Gemma, Imagen, Codey | GPT-5/5.1/5.2, DALL-E, Whisper |
| **Modeles tiers** | Claude (Anthropic), Llama (Meta), Mistral, Cohere, AI21, DeepSeek, OpenAI | Claude, Llama, Mistral, AI21 | Llama (Meta), Mistral, Phi (Microsoft), Cohere |
| **Nombre total** | ~100 serverless + 100 via Marketplace | 200+ via Model Garden | 1800+ via Model Catalog |
| **Fine-tuning** | Custom model training, RLHF (2025) | Tuning Studio, LoRA, RLHF | Fine-tuning Azure OpenAI, LoRA |
| **Agents** | Bedrock Agents + AgentCore | Vertex AI Agent Engine (GA) | Azure AI Agent Service |
| **RAG** | Bedrock Knowledge Bases | Vertex AI Search + grounding | Azure AI Search + grounding |
| **Guardrails** | Bedrock Guardrails | Safety filters + scoring | Content Safety + filtrage |
| **Evaluation** | Model Evaluation | Vertex AI Evaluation | Azure AI Evaluation |

**Analyse** :

- **AWS Bedrock** offre le **choix le plus large de modeles tiers** avec ~100 modeles serverless et 100+ via Marketplace, incluant Claude (Anthropic), Llama (Meta), Mistral, et meme OpenAI. L'ajout du RLHF (Reinforcement Learning from Human Feedback) en 2025 pour la customisation est innovant, avec des gains de precision annonces de 66% par rapport aux modeles de base. Le routage regional intelligent assure la haute disponibilite.

- **Google Model Garden** donne acces aux modeles **Gemini** les plus avances, dont Gemini 3 Pro (raisonnement) et Gemini 2.5 Flash (latence optimisee). Le catalogue de 200+ modeles est bien curate. L'integration avec Vertex AI Agent Engine (GA) et la memoire persistante pour les agents sont des differenciateurs. L'avantage unique est le grounding natif avec Google Search.

- **Azure AI Foundry** beneficie de l'acces exclusif a la famille **GPT-5.x** (dont GPT-5.2 avec execution agentique avancee). Le catalogue de 1800+ modeles est le plus vaste. L'integration avec GitHub Copilot et les outils Microsoft est un avantage pour les equipes de developpement. Le Confidential AI pour l'inference securisee des modeles est un differenciateur pour les secteurs regules.

---

## 3. Comparaison tarifaire

### 3.1 Couts d'entrainement (GPU instances)

| Instance | GPU | AWS SageMaker ($/h) | Google Vertex AI ($/h) | Azure ML ($/h) |
|----------|-----|---------------------|------------------------|-----------------|
| **GPU entry-level** | L4 / T4 | ~1.41 (ml.g5.xlarge) | ~0.70 (g2-standard-4) | ~0.53 (NC4as T4 v3) |
| **GPU mid-range** | A10G | ~1.69 (ml.g5.2xlarge) | ~1.70 (a2-highgpu-1g) | ~1.90 (NC24ads A100 v4) |
| **GPU high-end A100** | 8x A100 80GB | ~32.77 (ml.p4d.24xlarge) | ~29.39 (a2-ultragpu-8g) | ~27.20 (ND96asr A100 v4) |
| **GPU top-tier H100** | 8x H100 | ~65.28 (ml.p5.48xlarge) | ~74.31 (a3-highgpu-8g) | ~55.84 (ND H100 v5) |
| **TPU** | TPU v6e | N/A | ~1.375/chip (on-demand) | N/A |
| **Custom AI chip** | Trainium | ~1.34 (ml.trn1.2xlarge) | N/A | N/A |

**Notes importantes** :
- AWS a annonce en juin 2025 des **reductions de prix allant jusqu'a 45%** sur les instances P4 et P5 pour SageMaker AI
- Google TPU v6e descend a **0.55$/h** avec engagement 3 ans
- Azure ne facture **aucun supplement** pour Azure ML (uniquement les VMs sous-jacentes)
- Les prix varient selon les regions

#### Optimisations de couts

| Mecanisme | AWS SageMaker | Google Vertex AI | Azure ML |
|-----------|---------------|------------------|----------|
| **Reserved/Committed** | Savings Plans (jusqu'a 64% off) | CUD 1-3 ans (jusqu'a 60% off) | Reservations 1-3 ans (jusqu'a 50% off) |
| **Spot/Preemptible** | Spot Instances (jusqu'a 90% off) | Preemptible VMs (jusqu'a 80% off) | Spot VMs (jusqu'a 90% off) |
| **Serverless** | Serverless Inference (pay-per-request) | Pay-per-prediction | Serverless Compute (auto) |
| **Auto-scaling** | Oui (0 a N instances) | Oui (0 a N instances) | Oui (0 a N instances) |
| **Flexible training** | HyperPod Flexible Training Plans | N/A | N/A |

---

### 3.2 Couts d'inference

| Type d'inference | AWS SageMaker | Google Vertex AI | Azure ML |
|------------------|---------------|------------------|----------|
| **Real-time (GPU)** | A partir de ~1.41$/h (ml.g5.xlarge) | A partir de ~0.70$/h (g2-standard-4) | A partir de ~0.53$/h (NC4as T4) |
| **Serverless** | A partir de 0.00006$/s (par request) | Facturation par prediction | Auto GPU selection |
| **Batch** | Facture par duree d'instance | Facture par duree compute | Zero cout de deploiement, facture a l'execution |
| **GenAI (par token)** | Bedrock : variable selon modele | Gemini 2.5 Pro : $1.25/M input | Azure OpenAI : variable selon modele |

#### Tarification des modeles GenAI (exemples)

| Modele | Input ($/M tokens) | Output ($/M tokens) | Plateforme |
|--------|--------------------|--------------------|------------|
| **Claude 3.7 Sonnet** | $3.00 | $15.00 | AWS Bedrock / GCP |
| **Gemini 2.5 Pro** | $1.25 (< 200K) | $10.00 | GCP Vertex AI |
| **Gemini 2.5 Flash** | $0.30 | $2.50 | GCP Vertex AI |
| **GPT-5** | Variable (registration required) | Variable | Azure OpenAI |
| **Llama 3.2** | Self-hosted (cout GPU) | Self-hosted (cout GPU) | Tous |

---

### 3.3 Couts de stockage des modeles et artefacts

| Stockage | AWS | GCP | Azure |
|----------|-----|-----|-------|
| **Object Storage** | S3 : $0.023/GB/mois | Cloud Storage : $0.020/GB/mois | Blob Storage : $0.018/GB/mois |
| **Model Registry** | Inclus (stocke dans S3) | Inclus (stocke dans GCS) | Inclus (stocke dans Blob) |
| **Container Registry** | ECR : $0.10/GB/mois | Artifact Registry : $0.10/GB/mois | ACR : $0.003-0.667/jour (selon tier) |
| **Egress** | $0.09/GB (premier TB) | $0.12/GB (premier TB) | $0.087/GB (premier TB) |

---

### 3.4 Free tier et credits disponibles

| Offre | AWS SageMaker | Google Vertex AI | Azure ML |
|-------|---------------|------------------|----------|
| **Credits nouveaux comptes** | 250h/mois ml.t3.medium (2 mois) | $300 credits (90 jours) | $200 credits (30 jours) |
| **Free tier permanent** | SageMaker Studio Lab (gratuit illimite) | APIs Vertex AI en express mode (quotas limites) | Aucun supplement ML (payez VMs) |
| **Startups** | AWS Activate (jusqu'a $100K) | Google for Startups Cloud ($200K+) | Azure for Startups (jusqu'a $150K) |
| **Etudiants** | AWS Educate | Google Cloud for Education | Azure for Students ($1,000+) |
| **No-code gratuit** | SageMaker Canvas (2 mois, 160h/mois) | AutoML (inclus dans free tier) | Designer (inclus) |

**Analyse tarifaire globale** :

- **AWS** est generalement le plus cher en tarification brute mais offre les mecanismes d'optimisation les plus riches (Savings Plans 64%, Spot 90%, HyperPod Flexible Training). La reduction de 45% sur les instances P4/P5 (juin 2025) a rendu l'entrainement de grands modeles significativement plus abordable.

- **GCP** offre le meilleur rapport qualite-prix grace aux TPU, particulierement pour l'inference (TPU v6e a partir de 0.55$/h en engagement 3 ans). Le free tier est le plus genereux des trois ($300 credits). L'optimisation est excellente pour les workloads JAX/TensorFlow.

- **Azure** est competitif sur les instances GPU haut de gamme (H100 le moins cher des trois) et ne facture aucun supplement pour la plateforme ML elle-meme. Le programme startups est genereux (jusqu'a $150K). L'absence de cout de deploiement pour les endpoints batch est un avantage.

---

## 4. Forces et faiblesses

### 4.1 Tableau comparatif synthetique

| Critere | AWS SageMaker | Google Vertex AI | Azure ML |
|---------|:-------------:|:----------------:|:--------:|
| **Largeur de l'offre ML** | +++++ | ++++ | ++++ |
| **Entrainement distribue** | +++++ | +++++ | ++++ |
| **MLOps maturite** | +++++ | ++++ | +++++ |
| **AutoML** | ++++ | +++++ | ++++ |
| **Foundation Models** | +++++ | +++++ | +++++ |
| **Notebooks/IDE** | ++++ | ++++ | +++++ |
| **Edge/IoT** | ++++ | +++ | ++++ |
| **IA Responsable** | ++++ | ++++ | +++++ |
| **Integration entreprise** | ++++ | +++ | +++++ |
| **Open source/portabilite** | +++ | +++++ | +++ |
| **Rapport qualite-prix** | +++ | +++++ | ++++ |
| **Courbe d'apprentissage** | ++ | ++++ | +++ |
| **Documentation** | +++++ | +++++ | +++++ |
| **Ecosystem GenAI** | +++++ | +++++ | +++++ |

Legende : +++++ Excellent | ++++ Tres bon | +++ Bon | ++ Correct | + Faible

---

### 4.2 Forces et faiblesses detaillees

#### AWS SageMaker

**Forces** :
- Plateforme ML la plus complete et mature du marche avec le plus grand nombre de services integres
- SageMaker HyperPod : infrastructure d'entrainement distribue la plus avancee (checkpointless training, elastic training)
- Amazon Bedrock offre le plus large choix de modeles fondamentaux (~200 modeles)
- Integration forte avec Hugging Face pour l'ecosysteme open source
- SageMaker Unified Studio unifie donnees, analytique et IA en une seule interface
- Ground Truth : le service de labeling le plus complet (humain + ML + manage)
- Savings Plans agressifs (jusqu'a 64% de reduction)
- Part de marche la plus elevee (~34%)

**Faiblesses** :
- Complexite et courbe d'apprentissage elevee (trop de services, nommage confus)
- Tarification complexe avec de nombreuses dimensions de facturation
- Lock-in important (services proprietaires fortement lies)
- Pas de TPU ni d'equivalent aux accelerateurs custom Google
- Interface utilisateur moins intuitive que les concurrents
- Couts de sortie (egress) significatifs

#### Google Vertex AI

**Forces** :
- Avantage unique des **TPU** pour l'entrainement et l'inference (performance/cout superieur)
- Interface utilisateur la plus claire et intuitive des trois
- Integration profonde avec BigQuery (exploration, feature engineering, batch predictions)
- Modeles Gemini natifs, parmi les plus performants du marche
- Support natif de JAX (optimise pour TPU, ideal pour la recherche)
- Open source fort : Kubeflow, TFX, TensorFlow, JAX, Keras
- Meilleur free tier ($300 credits) et programme startups genereux ($200K+)
- Colab Enterprise : la meilleure experience notebook collaborative

**Faiblesses** :
- Part de marche inferieure (~22%), ecosysteme de partenaires plus reduit
- Moins de types d'instances GPU que AWS
- Feature Store moins mature que SageMaker
- Pas d'inference asynchrone native (necesssite architecture custom)
- Dependance aux TPU peut creer un lock-in specifique Google
- Moins d'integrations entreprise que Azure (pas d'equivalent Microsoft 365/Power Platform)

#### Azure Machine Learning

**Forces** :
- Integration la plus profonde avec l'ecosysteme Microsoft (VS Code, GitHub, Power BI, Fabric)
- Azure OpenAI Service : acces exclusif a GPT-5.x, le modele le plus avance pour le raisonnement
- Responsible AI Dashboard : la suite d'IA responsable la plus complete
- VS Code integration native (la meilleure experience developpeur IDE)
- Confidential ML (Intel SGX) : unique pour les secteurs regules
- DeepSpeed natif (par Microsoft Research) pour l'entrainement de grands modeles
- ONNX Runtime natif pour l'inference optimisee cross-plateforme
- Pas de supplement pour la plateforme ML (uniquement cout des VMs)
- Leader Gartner Magic Quadrant 2025 (2e annee consecutive)

**Faiblesses** :
- Feature Store plus recent et moins mature
- Pas de TPU ni d'accelerateur custom
- AutoML moins flexible que Vertex AI AutoML pour certains types de donnees
- Integration avec l'ecosysteme hors-Microsoft parfois complexe
- Nommage et architecture en evolution constante (Azure AI Studio -> Azure AI Foundry -> Microsoft Foundry)
- Moins de transparence sur la roadmap que AWS

---

### 4.3 Cas d'usage recommandes par plateforme

| Cas d'usage | Recommandation principale | Justification |
|-------------|--------------------------|---------------|
| **Entrainement LLM custom** | AWS SageMaker (HyperPod) | Infrastructure distribuee la plus avancee, resilience automatique |
| **Inference GenAI a grande echelle** | Google Vertex AI (TPU) | Meilleur rapport performance/cout avec TPU |
| **MLOps enterprise** | Azure ML | Integration DevOps/GitHub la plus fluide, Responsible AI |
| **Computer Vision** | Google Vertex AI | AutoML Vision excellent, TPU optimise pour CNN |
| **NLP / Chatbots** | Azure ML (Azure OpenAI) | GPT-5.x, meilleur modele de raisonnement |
| **Data Science exploratoire** | Google Vertex AI | BigQuery + Colab Enterprise, interface intuitive |
| **IoT / Edge AI** | AWS SageMaker | IoT Greengrass + Edge Manager le plus mature |
| **Secteurs regules (sante, finance)** | Azure ML | Confidential ML, Responsible AI, conformite Microsoft |
| **Multi-cloud / portabilite** | Google Vertex AI | Kubeflow, TFX, standards ouverts |
| **No-code ML** | AWS SageMaker Canvas | Interface la plus complete pour non-developpeurs |
| **Recherche academique** | Google Vertex AI | TPU Research Cloud, JAX, free tier genereux |
| **Startups** | Google Vertex AI | $300 credits + programme startups $200K+ |

---

## 5. Recommandations

### 5.1 Par profil utilisateur

#### Startups

| Critere | Recommandation |
|---------|----------------|
| **Budget limite** | **Google Vertex AI** -- Free tier le plus genereux ($300), programme startups Google for Startups Cloud (jusqu'a $200K+), interface intuitive, TPU economiques |
| **Alternative** | **Azure ML** -- Azure for Startups (jusqu'a $150K), pas de frais de plateforme, integration GitHub native |
| **A eviter au depart** | AWS SageMaker -- Complexite elevee, cout initial plus important, courbe d'apprentissage longue |

#### Entreprises etablies

| Critere | Recommandation |
|---------|----------------|
| **Ecosysteme Microsoft** | **Azure ML** -- Integration VS Code, GitHub, Power BI, Microsoft 365, Fabric, Azure DevOps |
| **Ecosysteme AWS** | **AWS SageMaker** -- Integration S3, Redshift, Glue, plus grande part de marche |
| **Ecosysteme Google** | **Google Vertex AI** -- Integration BigQuery, Cloud Storage, GKE |
| **Multi-cloud** | **Google Vertex AI** -- Standards ouverts (Kubeflow, TFX, ONNX), meilleure portabilite |

#### Recherche / Academique

| Critere | Recommandation |
|---------|----------------|
| **Deep Learning** | **Google Vertex AI** -- TPU Research Cloud (gratuit pour chercheurs), JAX optimise, TensorFlow natif |
| **NLP avance** | **AWS SageMaker** -- Integration Hugging Face profonde, HyperPod pour entrainement distribue |
| **IA Responsable** | **Azure ML** -- Responsible AI Dashboard le plus complet, outils de fairness et explicabilite |

---

### 5.2 Par cas d'usage

#### NLP et traitement du langage

| Besoin | Recommandation | Justification |
|--------|----------------|---------------|
| **Chatbots / assistants** | Azure ML (Azure OpenAI GPT-5.x) | Modele de raisonnement le plus avance |
| **RAG (Retrieval-Augmented Generation)** | AWS (Bedrock Knowledge Bases) | Integration native, plus de choix de modeles |
| **Classification de texte** | Google Vertex AI (AutoML Text) | AutoML le plus performant pour le NLP |
| **Traduction** | Google Vertex AI | Heritage Google Translate, modeles multilingues |

#### Computer Vision

| Besoin | Recommandation | Justification |
|--------|----------------|---------------|
| **Classification d'images** | Google Vertex AI (AutoML Vision) | Performances de pointe, TPU optimise |
| **Detection d'objets** | AWS SageMaker (Rekognition + custom) | Ecosysteme le plus complet |
| **Generation d'images** | Azure ML (DALL-E) ou AWS (Stability AI via Bedrock) | Modeles de generation les plus avances |

#### GenAI et LLM

| Besoin | Recommandation | Justification |
|--------|----------------|---------------|
| **Deploiement LLM production** | AWS Bedrock | Plus grand choix de modeles, serverless |
| **Fine-tuning LLM** | AWS SageMaker HyperPod | Infrastructure distribuee la plus robuste |
| **Inference LLM economique** | Google Vertex AI (TPU) | Meilleur rapport cout/performance |
| **Raisonnement avance** | Azure OpenAI (GPT-5.2) | Modele le plus performant en raisonnement |

#### MLOps

| Besoin | Recommandation | Justification |
|--------|----------------|---------------|
| **CI/CD ML** | Azure ML + GitHub Actions | Integration la plus fluide avec DevOps moderne |
| **Feature Store** | AWS SageMaker | Le plus mature (online/offline) |
| **Model Monitoring** | AWS SageMaker | Model Dashboard + Model Monitor les plus complets |
| **Gouvernance** | Azure ML | Responsible AI Dashboard, conformite entreprise |

---

### 5.3 Criteres de decision cles

Pour choisir votre plateforme ML, evaluez ces criteres par ordre de priorite :

1. **Ecosysteme existant** : L'integration avec votre infrastructure cloud actuelle est le facteur #1. Migrer entre clouds est couteux et complexe.

2. **Type de workload dominant** :
   - Entrainement de grands modeles -> AWS HyperPod
   - Inference a grande echelle -> GCP TPU
   - MLOps enterprise -> Azure ML

3. **Budget et modele de facturation** :
   - Budget serre -> GCP (meilleur free tier, TPU economiques)
   - Workloads previsibles -> AWS (Savings Plans 64%)
   - Pas de frais de plateforme -> Azure

4. **Equipe et competences** :
   - Data Scientists -> GCP (Colab Enterprise, interface intuitive)
   - ML Engineers -> AWS (SageMaker le plus complet)
   - Developpeurs -> Azure (VS Code, GitHub, Copilot)

5. **Exigences reglementaires** :
   - Confidentialite -> Azure (Confidential ML)
   - Souverainete -> Evaluer les regions disponibles
   - IA Responsable -> Azure (meilleur Dashboard)

6. **Portabilite et lock-in** :
   - Multi-cloud -> GCP (Kubeflow, standards ouverts)
   - Lock-in acceptable -> AWS (plus de services natifs)

---

## 6. Tendances 2025-2026

### 6.1 GenAI et LLM Hosting

L'annee 2025 a ete marquee par une acceleration massive de l'adoption des modeles fondamentaux en production :

- **AWS** a enrichi Bedrock avec ~200 modeles, le RLHF pour la customisation, et le routage regional intelligent. L'ajout d'OpenAI dans Bedrock est un tournant strategique.

- **GCP** a lance Gemini 3 Pro/Flash avec des capacites de raisonnement avancees et un contexte de 1M tokens. L'Agent Engine avec memoire persistante marque l'entree dans l'ere des agents IA autonomes.

- **Azure** a deploye GPT-5/5.1/5.2 avec execution agentique avancee. GPT-5.2 introduit des chaines logiques plus profondes et la generation d'artefacts deployables.

**Tendance cle** : Le marche evolue de l'inference simple vers des **systemes multi-agents** avec memoire, outils et capacites d'execution autonome. Les trois providers investissent massivement dans les frameworks d'agents (Bedrock Agents, Vertex AI Agent Engine, Azure AI Agent Service).

---

### 6.2 MLOps Maturity

L'ecart entre "prototype" et "production" se reduit grace a la maturation des outils MLOps :

- **Convergence MLOps/LLMOps** : MLflow 3 (2025) ajoute le support natif GenAI (prompt tracing, LLM judges). Les trois providers integrent des capacites LLMOps dans leurs pipelines existants.

- **Hyper-automatisation** : Les workflows passent de l'automatisation basique a l'autonomie complete, avec re-entrainement et redeploiement automatiques sans intervention humaine.

- **Consolidation** : L'integration Tecton-Databricks (2025) illustre la tendance a la consolidation du marche. Les plateformes cloud absorbent progressivement les fonctionnalites des outils tiers.

- **Gouvernance IA** : Les trois providers renforcent leurs outils de gouvernance en reponse a l'EU AI Act et aux reglementations mondiales. Les Model Cards, lineage tracking et audit trails deviennent des requis de base.

---

### 6.3 Edge AI

L'inference sur les appareils peripheriques connait une croissance rapide :

- **AWS** : IoT Greengrass reste le leader pour le deploiement edge avec support ML natif. SageMaker Edge Manager optimise les modeles pour les appareils embarques.

- **GCP** : Google Distributed Cloud Edge supporte GKE pour les workloads a faible latence. Le TPU Edge (Coral) offre une inference ML ultra-basse consommation.

- **Azure** : Azure IoT Edge avec integration Azure ML deploie l'intelligence cloud sur les appareils IoT. L'integration avec ONNX Runtime permet l'inference cross-plateforme.

**Tendance cle** : Les runtimes legers (TensorFlow Lite, ONNX Runtime, PyTorch Mobile) et les accelerateurs hardware (TensorRT NVIDIA, OpenVINO Intel, Coral Google) permettent l'inference de modeles de plus en plus complexes sur des appareils contraints. L'entrainement federe emerge comme solution pour la protection des donnees.

---

### 6.4 Responsible AI / AI Governance

La gouvernance IA devient un pilier central des plateformes ML :

- **AWS** : SageMaker Clarify (biais/explicabilite), Model Cards (documentation), Role Manager (permissions), Model Dashboard (monitoring centralise).

- **GCP** : Vertex AI Studio avec filtrage de contenu et scoring de securite, Responsible AI Toolkit pour le suivi du lifecycle, Model Evaluation pour l'evaluation systematique.

- **Azure** : Responsible AI Dashboard (le plus complet), Content Safety, Confidential ML, integration avec les outils de conformite Microsoft (Purview, Compliance Manager).

**Tendance cle** : L'EU AI Act entre en application progressive (2025-2026), imposant des exigences de transparence, d'explicabilite et de gestion des risques pour les systemes IA. Les trois providers renforcent leurs outils pour aider les entreprises a se conformer. La gouvernance n'est plus un "nice-to-have" mais un prerequis pour la production.

---

## Synthese finale

### Classement par domaine

| Domaine | #1 | #2 | #3 |
|---------|-----|-----|-----|
| **Completude de la plateforme** | AWS SageMaker | Azure ML | Google Vertex AI |
| **Entrainement distribue** | AWS (HyperPod) | GCP (TPU) | Azure |
| **Inference economique** | GCP (TPU) | Azure (pas de frais ML) | AWS |
| **MLOps** | AWS = Azure | AWS = Azure | GCP |
| **GenAI / Foundation Models** | AWS (Bedrock) = Azure (OpenAI) | AWS (Bedrock) = Azure (OpenAI) | GCP (Gemini) |
| **Experience developpeur** | Azure (VS Code/GitHub) | GCP (Colab/BigQuery) | AWS |
| **IA Responsable** | Azure | AWS = GCP | AWS = GCP |
| **Rapport qualite-prix** | GCP | Azure | AWS |
| **Innovation** | GCP (TPU/Gemini) = AWS (HyperPod) | GCP (TPU/Gemini) = AWS (HyperPod) | Azure |

### Verdict

Les trois plateformes sont toutes des **Leaders reconnus** dans le Gartner Magic Quadrant 2025 pour les plateformes Data Science et ML. Il n'y a pas de "mauvais choix" -- la decision depend principalement de :

1. **Votre ecosysteme cloud existant** (facteur #1)
2. **Votre type de workload dominant** (entrainement vs inference vs MLOps)
3. **Les competences de votre equipe** (data scientists vs ML engineers vs developpeurs)
4. **Vos exigences de conformite et gouvernance**

En 2026, la convergence entre les plateformes s'accelere : toutes trois offrent des capacites GenAI avancees, des outils MLOps matures et des options d'entrainement distribue. La differenciation se fait desormais sur l'ecosysteme, l'experience utilisateur et les accelerateurs hardware proprietaires (TPU Google, Trainium AWS, Confidential Computing Azure).

---

## 7. Sources

### AWS SageMaker

| # | Source | Type | Date |
|---|--------|------|------|
| 1 | [What is Amazon SageMaker AI? - Documentation officielle](https://docs.aws.amazon.com/sagemaker/latest/dg/whatis.html) | Officiel | 2025 |
| 2 | [Amazon SageMaker AI Features](https://docs.aws.amazon.com/sagemaker/latest/dg/whatis-features.html) | Officiel | 2025 |
| 3 | [SageMaker AI Pricing](https://aws.amazon.com/sagemaker/ai/pricing/) | Officiel | 2025 |
| 4 | [Amazon SageMaker Feature Store](https://aws.amazon.com/sagemaker/ai/feature-store/) | Officiel | 2025 |
| 5 | [Machine Learning Operations Tools - SageMaker MLOps](https://aws.amazon.com/sagemaker/ai/mlops/) | Officiel | 2025 |
| 6 | [Amazon SageMaker Model Registry](https://docs.aws.amazon.com/sagemaker/latest/dg/model-registry.html) | Officiel | 2025 |
| 7 | [Amazon SageMaker Ground Truth - Data Labeling](https://aws.amazon.com/sagemaker/data-labeling/) | Officiel | 2025 |
| 8 | [Scale Gen AI Model Development - SageMaker HyperPod](https://aws.amazon.com/sagemaker/ai/hyperpod/) | Officiel | 2025 |
| 9 | [Amazon Bedrock - Foundation Models](https://aws.amazon.com/bedrock/) | Officiel | 2025 |
| 10 | [Amazon Bedrock Model Choice](https://aws.amazon.com/bedrock/model-choice/) | Officiel | 2025 |
| 11 | [ML Compute Instance - SageMaker Studio Notebooks](https://aws.amazon.com/sagemaker/ai/notebooks/) | Officiel | 2025 |
| 12 | [Machine Learning Inference - SageMaker Deployment](https://aws.amazon.com/sagemaker/ai/deploy/) | Officiel | 2025 |
| 13 | [SageMaker ML Governance](https://aws.amazon.com/sagemaker/ai/ml-governance/) | Officiel | 2025 |
| 14 | [Price reductions for SageMaker AI GPU instances (juin 2025)](https://aws.amazon.com/about-aws/whats-new/2025/06/price-reductions-amazon-sagemaker-ai-gpu-accelerated-instances/) | Officiel | 2025-06 |
| 15 | [SageMaker HyperPod checkpointless training (dec. 2025)](https://aws.amazon.com/about-aws/whats-new/2025/12/amazon-sagemaker-hyperpod-checkpointless-training/) | Officiel | 2025-12 |
| 16 | [Elastic training on SageMaker HyperPod (dec. 2025)](https://aws.amazon.com/about-aws/whats-new/2025/12/elastic-training-amazon-sagemaker-hyperpod/) | Officiel | 2025-12 |
| 17 | [AWS SageMaker AI Reviews - Gartner Peer Insights](https://www.gartner.com/reviews/market/data-science-and-machine-learning-platforms/vendor/amazon-web-services/product/amazon-sagemaker-ai) | Analyste | 2025 |
| 18 | [SageMaker Unified Studio - Release Notes](https://docs.aws.amazon.com/sagemaker-unified-studio/latest/userguide/release-notes.html) | Officiel | 2025-2026 |
| 19 | [AWS doubles down on custom LLMs - TechCrunch](https://techcrunch.com/2025/12/03/aws-doubles-down-on-custom-llms-with-features-meant-to-simplify-model-creation/) | Media | 2025-12 |
| 20 | [SageMaker Automatic Model Tuning](https://docs.aws.amazon.com/sagemaker/latest/dg/automatic-model-tuning.html) | Officiel | 2025 |

### Google Vertex AI

| # | Source | Type | Date |
|---|--------|------|------|
| 1 | [Overview of Vertex AI](https://docs.cloud.google.com/vertex-ai/docs/start/introduction-unified-platform) | Officiel | 2025 |
| 2 | [Vertex AI Platform](https://cloud.google.com/vertex-ai) | Officiel | 2025 |
| 3 | [Vertex AI Pricing](https://cloud.google.com/vertex-ai/pricing) | Officiel | 2025 |
| 4 | [MLOps on Vertex AI](https://cloud.google.com/vertex-ai/docs/start/introduction-mlops) | Officiel | 2025 |
| 5 | [Introduction to Vertex AI Pipelines](https://docs.cloud.google.com/vertex-ai/docs/pipelines/introduction) | Officiel | 2025 |
| 6 | [Feature management in Vertex AI](https://cloud.google.com/vertex-ai/docs/featurestore) | Officiel | 2025 |
| 7 | [Model Garden on Vertex AI](https://cloud.google.com/model-garden) | Officiel | 2025 |
| 8 | [Overview of Model Garden](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/model-garden/explore-models) | Officiel | 2025 |
| 9 | [Vertex AI Workbench](https://cloud.google.com/vertex-ai-notebooks) | Officiel | 2025 |
| 10 | [Training with TPU accelerators](https://docs.cloud.google.com/vertex-ai/docs/training/training-with-tpu-vm) | Officiel | 2025 |
| 11 | [Distributed training on Vertex AI](https://docs.cloud.google.com/vertex-ai/docs/training/distributed-training) | Officiel | 2025 |
| 12 | [Tensor Processing Units (TPUs)](https://cloud.google.com/tpu) | Officiel | 2025 |
| 13 | [Google Models - Generative AI on Vertex AI](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/models) | Officiel | 2025 |
| 14 | [Gemini 2.5 Pro on Vertex AI](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/models/gemini/2-5-pro) | Officiel | 2025 |
| 15 | [Gemini 3 Pro on Vertex AI](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/models/gemini/3-pro) | Officiel | 2025-2026 |
| 16 | [Vertex AI Release Notes](https://docs.cloud.google.com/vertex-ai/docs/release-notes) | Officiel | 2025-2026 |
| 17 | [Vertex AI Serverless Training Overview](https://docs.cloud.google.com/vertex-ai/docs/training/overview) | Officiel | 2025 |
| 18 | [Overview of getting inferences on Vertex AI](https://docs.cloud.google.com/vertex-ai/docs/predictions/overview) | Officiel | 2025 |
| 19 | [Batch predictions on Vertex AI](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/maas/capabilities/batch-prediction) | Officiel | 2025 |
| 20 | [Gartner 2025 Magic Quadrant - Google Cloud Blog](https://cloud.google.com/blog/products/ai-machine-learning/gartner-2025-magic-quadrant-for-data-science-and-ml-platforms) | Analyste | 2025 |
| 21 | [Free Trial and Free Tier Services - Google Cloud](https://cloud.google.com/free) | Officiel | 2025 |
| 22 | [Choose a notebook solution - Vertex AI Workbench](https://cloud.google.com/vertex-ai/docs/workbench/notebook-solution) | Officiel | 2025 |

### Azure Machine Learning

| # | Source | Type | Date |
|---|--------|------|------|
| 1 | [Azure Machine Learning - ML as a Service](https://azure.microsoft.com/en-us/products/machine-learning) | Officiel | 2025 |
| 2 | [Pricing - Azure Machine Learning](https://azure.microsoft.com/en-us/pricing/details/machine-learning/) | Officiel | 2025 |
| 3 | [MLOps model management - Azure ML](https://learn.microsoft.com/en-us/azure/machine-learning/concept-model-management-and-deployment?view=azureml-api-2) | Officiel | 2025 |
| 4 | [Machine Learning registries for MLOps - Azure](https://learn.microsoft.com/en-us/azure/machine-learning/concept-machine-learning-registries-mlops?view=azureml-api-2) | Officiel | 2025 |
| 5 | [Distributed GPU training guide - Azure ML](https://learn.microsoft.com/en-us/azure/machine-learning/how-to-train-distributed-gpu?view=azureml-api-2) | Officiel | 2025 |
| 6 | [Compute instance - Azure ML](https://learn.microsoft.com/en-us/azure/machine-learning/concept-compute-instance?view=azureml-api-2) | Officiel | 2025 |
| 7 | [Endpoints for inference - Azure ML](https://learn.microsoft.com/en-us/azure/machine-learning/concept-endpoints?view=azureml-api-2) | Officiel | 2025 |
| 8 | [Online endpoints for real-time inference - Azure ML](https://learn.microsoft.com/en-us/azure/machine-learning/concept-endpoints-online?view=azureml-api-2) | Officiel | 2025 |
| 9 | [Batch endpoints - Azure ML](https://learn.microsoft.com/en-us/azure/machine-learning/concept-endpoints-batch?view=azureml-api-2) | Officiel | 2025 |
| 10 | [Azure Machine Learning in VS Code](https://code.visualstudio.com/docs/datascience/azure-machine-learning) | Officiel | 2025 |
| 11 | [Run Jupyter notebooks in workspace - Azure ML](https://learn.microsoft.com/en-us/azure/machine-learning/how-to-run-jupyter-notebooks?view=azureml-api-2) | Officiel | 2025 |
| 12 | [AutoML for NLP - Azure ML](https://learn.microsoft.com/en-us/azure/machine-learning/how-to-auto-train-nlp-models?view=azureml-api-2) | Officiel | 2025 |
| 13 | [Compute targets - Azure ML](https://learn.microsoft.com/en-us/azure/machine-learning/concept-compute-target?view=azureml-api-2) | Officiel | 2025 |
| 14 | [Microsoft Leader in 2025 Gartner MQ for DS/ML Platforms](https://azure.microsoft.com/en-us/blog/microsoft-recognized-for-second-consecutive-year-as-a-leader-in-the-2025-gartner-magic-quadrant-for-data-science-and-machine-learning-platforms/) | Analyste | 2025 |
| 15 | [GPT-5 in Azure AI Foundry](https://azure.microsoft.com/en-us/blog/gpt-5-in-azure-ai-foundry-the-future-of-ai-apps-and-agents-starts-here/) | Officiel | 2025-08 |
| 16 | [GPT-5.2 in Microsoft Foundry](https://azure.microsoft.com/en-us/blog/introducing-gpt-5-2-in-microsoft-foundry-the-new-standard-for-enterprise-ai/) | Officiel | 2025-12 |
| 17 | [MLOps architecture guide - Azure](https://learn.microsoft.com/en-us/azure/architecture/ai-ml/guide/machine-learning-operations-v2) | Officiel | 2025 |
| 18 | [Azure Free Account for ML](https://azure.microsoft.com/en-us/free/machine-learning) | Officiel | 2025 |
| 19 | [Azure for Students](https://azure.microsoft.com/en-us/free/students) | Officiel | 2025 |
| 20 | [Prompt Flow deployment - Azure ML](https://learn.microsoft.com/en-us/azure/machine-learning/prompt-flow/how-to-deploy-for-real-time-inference?view=azureml-api-2) | Officiel | 2025 |

### Sources transversales

| # | Source | Type | Date |
|---|--------|------|------|
| 1 | [Compare Google Vertex AI vs. Amazon SageMaker vs. Azure ML - TechTarget](https://www.techtarget.com/searchenterpriseai/tip/Compare-Google-Vertex-AI-vs-Amazon-SageMaker-vs-Azure-ML) | Media specialise | 2025 |
| 2 | [AI Cloud Wars 2025 - SageMaker vs Vertex AI vs Azure ML](https://hire-aidevelopers.com/blog/ai-cloud-wars-2025-sagemaker-vertex-ai-azure-ml-comparison/) | Media | 2025 |
| 3 | [Gartner MQ for Data Science and ML Platforms 2025](https://www.gartner.com/en/documents/6533902) | Analyste | 2025-05 |
| 4 | [Cloud GPU Pricing Comparison 2025](https://verda.com/blog/cloud-gpu-pricing-comparison) | Benchmark | 2025 |
| 5 | [H100 Rental Prices: Cloud Cost Comparison (Nov 2025)](https://intuitionlabs.ai/articles/h100-rental-prices-cloud-comparison) | Benchmark | 2025-11 |
| 6 | [MLOps in 2026 - The Definitive Guide](https://rahulkolekar.com/mlops-in-2026-the-definitive-guide-tools-cloud-platforms-architectures-and-a-practical-playbook/) | Expert | 2026 |
| 7 | [Top 10 Responsible AI Tools - AI Magazine](https://aimagazine.com/news/top-10-responsible-ai-tools) | Media | 2025 |
| 8 | [Top 15 AI/ML Cloud Platforms 2025 - Saturn Cloud](https://saturncloud.io/blog/top-15-ai-ml-cloud-platforms-in-2025/) | Media | 2025 |
| 9 | [Azure AI Offerings vs AWS & Google AI: 2026 Comparison](https://bloomcs.com/azure-ai-offerings-vs-aws-google-ai/) | Media | 2026 |
| 10 | [AI Inference Costs 2025: TPUs vs GPUs](https://www.ainewshub.org/post/ai-inference-costs-tpu-vs-gpu-2025) | Benchmark | 2025 |
| 11 | [Hot ML Frameworks 2025: PyTorch vs TensorFlow vs JAX](https://medium.com/@backendbyeli/hot-ml-frameworks-2025-7fb42d776ae9) | Expert | 2025 |
| 12 | [Top 10 Edge AI Solutions - AI Magazine](https://aimagazine.com/top10/top-10-edge-ai-solutions) | Media | 2025 |

---

*Rapport genere le 2026-02-10 par Naskal Domain Analyst -- Claude Code Edition.*
*Total des sources : 74 references issues de documentation officielle, cabinets d'analystes et medias specialises.*
